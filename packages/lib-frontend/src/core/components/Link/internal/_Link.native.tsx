import { Linking, TextProps } from 'react-native';
import { Text as AnimatableText } from 'react-native-animatable';
import { _LinkProps } from '@lib/frontend/core/components/Link/internal/_Link.model';
import compose from '@lib/frontend/core/utils/compose/compose';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';

//TODO: test if working in native
export const _Link = compose<_LinkProps, TextProps>({
  component: AnimatableText,
  getProps: ({ to, onPress, children }) => ({
    children,
    transition: 'color',
    duration: CommonTheme.animation.duration,
    onPress: () => {
      if (to) {
        Linking.openURL(to);
      }
      onPress && onPress();
    },
  }),
});
