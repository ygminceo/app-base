import { Linking, Text, TextProps } from 'react-native';
import { _LinkProps } from '@lib/frontend/core/components/Link/internal/_Link.model';
import compose from '@lib/frontend/core/utils/compose/compose';

export const _Link = compose<_LinkProps, TextProps>({
  component: Text,
  getProps: ({ children, pathname, onPress }) => ({
    children,
    onPress: () => (pathname ? Linking.openURL(pathname) : onPress && onPress()),
  }),
});
