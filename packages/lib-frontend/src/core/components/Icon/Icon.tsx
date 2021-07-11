import React from 'react';
import { createAnimatableComponent } from 'react-native-animatable';
import { Pressable } from '@lib/frontend/core/components';
import { IconProps } from '@lib/frontend/core/components/Icon/Icon.model';
import { getIconStyle } from '@lib/frontend/core/components/Icon/Icon.style';
import { _Icon } from '@lib/frontend/core/components/Icon/internal/_Icon';
import { useStyles, useTextStyles } from '@lib/frontend/core/hooks';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

const _AnimatableIcon = createAnimatableComponent(_Icon);

export const Icon = ({ animatable, ...props }: IconProps) => {
  const { computedStyles: textStyles } = useTextStyles({ ...props, muted: props.isDisabled }, []);
  const { inheritedStyles, computedStyles: iconStyles } = useStyles(props, [getIconStyle]);
  const { onPress, icon, isPressed } = props;
  const duration = useTheme<number>('animation.duration');

  const Component = animatable ? _AnimatableIcon : _Icon;
  let animationProps = {};
  if (animatable) {
    animationProps = {
      animation: animatable.animation,
      transition: animatable.transition,
      duration: animatable.duration || duration,
      onTransitionStart: animatable.onStart,
      onTransitionEnd: animatable.onEnd,
      easing: 'ease-in-out',
    };
  }
  const component = (
    <Component
      style={[textStyles, ...[onPress ? [] : [inheritedStyles]]]}
      icon={icon}
      {...animationProps}
    />
  );

  return onPress ? (
    <Pressable
      style={[inheritedStyles, iconStyles]}
      onPress={onPress}
      isPressed={isPressed}
      isDisabled={props.isDisabled}
      center>
      {component}
    </Pressable>
  ) : (
    component
  );
};
