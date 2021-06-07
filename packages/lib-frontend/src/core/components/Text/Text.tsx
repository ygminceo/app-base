import { TextProps } from '@lib/frontend/core/components/Text/Text.model';
import { useTextStyles } from '@lib/frontend/core/hooks';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';
import React from 'react';
import { Text as NativeText } from 'react-native';
import { Text as AnimatableText } from 'react-native-animatable';

export const Text = ({ children, animatable, ...props }: TextProps) => {
  const { styles } = useTextStyles<TextProps>(props, []);
  const duration = useTheme<number>('animation.duration');
  const Component = animatable ? AnimatableText : NativeText;
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
  return <Component style={styles}>{children}</Component>;
};
