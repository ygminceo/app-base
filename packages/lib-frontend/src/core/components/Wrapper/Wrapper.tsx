import { isArray, reduce } from 'lodash';
import {
  Children,
  cloneElement,
  createElement,
  forwardRef,
  isValidElement,
  ReactNode,
  RefObject,
} from 'react';
import {
  LayoutChangeEvent,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { createAnimatableComponent, View as AnimatableView } from 'react-native-animatable';
import { WrapperProps } from '@lib/frontend/core/components/Wrapper/Wrapper.model';
import { getWrapperChildStyle } from '@lib/frontend/core/components/Wrapper/Wrapper.style';
import { useViewStyles } from '@lib/frontend/core/hooks';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

const AnimatableTouchableOpacity = createAnimatableComponent(TouchableOpacity);

export const Wrapper = forwardRef<RefObject<any>, WrapperProps>(
  (
    {
      children,
      horizontalScrollable,
      onPress,
      onPressIn,
      onPressOut,
      onMeasure,
      onScroll,
      spacing,
      spacingTight,
      verticalScrollable,
      animatable,
      safe,
      ...props
    },
    ref,
  ) => {
    const { styles } = useViewStyles(props);
    const duration = useTheme<number>('animation.duration');

    if (isArray(children)) {
      children = reduce<ReactNode, ReactNode[]>(
        Children.toArray(children),
        (result, child, i) => {
          if (isValidElement(child)) {
            const style = StyleSheet.flatten([
              child.props.style,
              ...(result.length
                ? [getWrapperChildStyle({ row: props.row, spacingTight, spacing })]
                : []),
            ]);
            return [...result, cloneElement(child, { key: i, style })];
          }
          return result;
        },
        [],
      );
    }

    const pressable = onPress || onPressIn || onPressOut;
    const scrollable = verticalScrollable || horizontalScrollable;

    const Component = scrollable
      ? ScrollView
      : safe
      ? SafeAreaView
      : pressable
      ? animatable
        ? AnimatableTouchableOpacity
        : TouchableOpacity
      : animatable
      ? AnimatableView
      : View;

    let touchableProps: TouchableOpacityProps = {};
    if (pressable) {
      touchableProps = { activeOpacity: 1, onPress, onPressIn, onPressOut };
    }

    let scrollableProps: ScrollViewProps = {};
    if (scrollable) {
      scrollableProps = {
        scrollEnabled: true,
        alwaysBounceHorizontal: false,
        alwaysBounceVertical: false,
        horizontal: horizontalScrollable,
        showsHorizontalScrollIndicator: horizontalScrollable,
        showsVerticalScrollIndicator: verticalScrollable,
        contentContainerStyle: styles,
        scrollEventThrottle: 16,
        onScroll: onScroll
          ? ({ nativeEvent }) =>
              onScroll({
                x: nativeEvent.contentOffset.x,
                y: nativeEvent.contentOffset.y,
              })
          : undefined,
      };
    }

    return createElement(
      Component as any,
      {
        ...props,
        ...touchableProps,
        ...scrollableProps,
        ...(animatable
          ? {
              animation: animatable.animation,
              transition: animatable.transition,
              duration: animatable.duration || duration,
              onTransitionStart: animatable.onStart,
              onTransitionEnd: animatable.onEnd,
              easing: 'ease-in-out',
            }
          : {}),
        style: scrollable ? (horizontalScrollable ? { width: '100%' } : undefined) : styles,
        onLayout: onMeasure
          ? (e: LayoutChangeEvent) => {
              const { x, y, width, height } = e.nativeEvent.layout;
              onMeasure({ x, y, width, height });
            }
          : undefined,
        ref,
      },
      children,
    );
  },
);
