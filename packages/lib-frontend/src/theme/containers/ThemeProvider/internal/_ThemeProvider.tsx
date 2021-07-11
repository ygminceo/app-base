import { ReactNode } from 'react';
import { DefaultTheme, Provider } from 'react-native-paper';
import compose from '@lib/frontend/core/utils/compose/compose';
import { _ThemeProviderProps } from '@lib/frontend/theme/containers/ThemeProvider/internal/_ThemeProvider.model';

export const _ThemeProvider = compose<
  _ThemeProviderProps,
  {
    children: ReactNode;
    theme: ReactNativePaper.Theme;
  }
>({
  component: Provider,
  getProps: ({ children, theme }) => ({
    children,
    theme: {
      ...DefaultTheme,
      myOwnProperty: true,
      animation: { scale: 0 },
      dark: theme.isDark,
      roundness: theme.shape.borderRadius,
      colors: {
        ...DefaultTheme.colors,
        primary: theme.colors.primary.main,
        accent: theme.colors.secondary.main,
        error: theme.colors.error.main,
        background: theme.colors.background.main,
        text: theme.colors.text.main,
      },
    },
  }),
});
