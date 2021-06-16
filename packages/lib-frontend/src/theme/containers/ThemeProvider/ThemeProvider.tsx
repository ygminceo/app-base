import React from 'react';
import { ThemeProviderProps } from '@lib/frontend/theme/containers/ThemeProvider/ThemeProvider.model';
import { _ThemeProvider } from '@lib/frontend/theme/containers/ThemeProvider/internal/_ThemeProvider';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useTheme();
  return <_ThemeProvider theme={theme}>{children}</_ThemeProvider>;
};
