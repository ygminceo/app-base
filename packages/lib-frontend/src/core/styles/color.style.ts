import { StyleSheet } from 'react-native';
import { ColorProps } from '@lib/frontend/core/styles/color.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';

export const colorStyle = StyleSheet.create({
  error: { color: CommonTheme.colors.error.main },
  errorDark: { color: CommonTheme.colors.error.dark },
  errorLight: { color: CommonTheme.colors.error.light },
  primary: { color: CommonTheme.colors.primary.main },
  primaryDark: { color: CommonTheme.colors.primary.dark },
  primaryLight: { color: CommonTheme.colors.primary.light },
  success: { color: CommonTheme.colors.success.main },
  successDark: { color: CommonTheme.colors.success.dark },
  successLight: { color: CommonTheme.colors.success.light },
});

export const getColorStyle: StyleGetterModel<ColorProps> = ({
  color,
  contrast,
  dark,
  error,
  light,
  primary,
  success,
  theme,
  muted,
}) => [
  primary
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
    : muted
    ? { color: theme?.colors.text.muted }
    : contrast
    ? { color: theme?.colors.text.contrast }
    : { color: theme?.colors.text.main },
];
