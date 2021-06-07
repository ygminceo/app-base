import { ColorProps } from '@lib/frontend/core/styles/color.model';
import { StyleGetter } from '@lib/frontend/core/styles/style.model';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';
import { StyleSheet } from 'react-native';

export const colorStyle = StyleSheet.create({
  black: { color: CommonTheme.colors.black },
  error: { color: CommonTheme.colors.error.main },
  errorDark: { color: CommonTheme.colors.error.dark },
  errorLight: { color: CommonTheme.colors.error.light },
  primary: { color: CommonTheme.colors.primary.main },
  primaryDark: { color: CommonTheme.colors.primary.dark },
  primaryLight: { color: CommonTheme.colors.primary.light },
  success: { color: CommonTheme.colors.success.main },
  successDark: { color: CommonTheme.colors.success.dark },
  successLight: { color: CommonTheme.colors.success.light },
  white: { color: CommonTheme.colors.white },
});

export const getColorStyle: StyleGetter<ColorProps> = ({
  color,
  contrast,
  dark,
  error,
  light,
  primary,
  success,
  black,
  white,
  theme,
}) => [
  black
    ? [colorStyle.black]
    : white
    ? [colorStyle.white]
    : primary
    ? light
      ? colorStyle.primaryLight
      : dark
      ? colorStyle.primaryDark
      : colorStyle.primary
    : success
    ? light
      ? colorStyle.successLight
      : dark
      ? colorStyle.successDark
      : colorStyle.success
    : error
    ? light
      ? colorStyle.errorLight
      : dark
      ? colorStyle.errorDark
      : colorStyle.error
    : color
    ? { color }
    : contrast
    ? { color: theme?.colors.text.contrast }
    : { color: theme?.colors.text.primary },
];
