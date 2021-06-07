import { BackgroundProps } from '@lib/frontend/core/styles/background.model';
import { StyleGetter } from '@lib/frontend/core/styles/style.model';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';
import { StyleSheet } from 'react-native';

export const backgroundStyle = StyleSheet.create({
  black: { backgroundColor: CommonTheme.colors.black },
  error: { backgroundColor: CommonTheme.colors.error.main },
  errorDark: { backgroundColor: CommonTheme.colors.error.dark },
  errorLight: { backgroundColor: CommonTheme.colors.error.light },
  primary: { backgroundColor: CommonTheme.colors.primary.main },
  primaryDark: { backgroundColor: CommonTheme.colors.primary.dark },
  primaryLight: { backgroundColor: CommonTheme.colors.primary.light },
  success: { backgroundColor: CommonTheme.colors.success.main },
  successDark: { backgroundColor: CommonTheme.colors.success.dark },
  successLight: { backgroundColor: CommonTheme.colors.success.light },
  transparent: { backgroundColor: 'transparent' },
  white: { backgroundColor: CommonTheme.colors.white },
});

export const getBackgroundStyle: StyleGetter<BackgroundProps> = ({
  backgroundColor,
  black,
  secondary,
  contrast,
  dark,
  error,
  fill,
  light,
  primary,
  success,
  theme,
  transparent,
  white,
}) => [
  ...(black
    ? [backgroundStyle.black]
    : secondary
    ? [{ backgroundColor: theme?.colors.border }]
    : white
    ? [backgroundStyle.white]
    : fill
    ? [{ backgroundColor: theme?.colors.background.primary }]
    : contrast
    ? [{ backgroundColor: theme?.colors.background.contrast }]
    : transparent
    ? [backgroundStyle.transparent]
    : primary
    ? [
        light
          ? backgroundStyle.primaryLight
          : dark
          ? backgroundStyle.primaryDark
          : backgroundStyle.primary,
      ]
    : success
    ? [
        light
          ? backgroundStyle.successLight
          : dark
          ? backgroundStyle.successDark
          : backgroundStyle.success,
      ]
    : error
    ? [
        light
          ? backgroundStyle.errorLight
          : dark
          ? backgroundStyle.errorDark
          : backgroundStyle.error,
      ]
    : backgroundColor
    ? [{ backgroundColor }]
    : []),
];
