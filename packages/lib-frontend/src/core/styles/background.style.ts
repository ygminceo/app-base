import { StyleSheet } from 'react-native';
import { BackgroundProps } from '@lib/frontend/core/styles/background.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';

export const backgroundStyle = StyleSheet.create({
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
});

export const getBackgroundStyle: StyleGetterModel<BackgroundProps> = ({
  backgroundColor,
  secondary,
  muted,
  contrast,
  dark,
  error,
  fill,
  light,
  primary,
  success,
  theme,
  transparent,
}) => [
  ...(secondary
    ? [{ backgroundColor: theme?.colors.border }]
    : muted
    ? [{ backgroundColor: theme?.colors.background.muted }]
    : fill
    ? [{ backgroundColor: theme?.colors.background.main }]
    : contrast
    ? [{ backgroundColor: theme?.colors.background.contrast }]
    : transparent
    ? [backgroundStyle.transparent]
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
    : primary
    ? [
        light
          ? backgroundStyle.primaryLight
          : dark
          ? backgroundStyle.primaryDark
          : backgroundStyle.primary,
      ]
    : backgroundColor
    ? [{ backgroundColor }]
    : []),
];
