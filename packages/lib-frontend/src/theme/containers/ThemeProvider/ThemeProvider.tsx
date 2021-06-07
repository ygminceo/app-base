import { _ThemeProvider } from '@lib/frontend/theme/containers/ThemeProvider/internal/_ThemeProvider';
import { ThemeProviderProps } from '@lib/frontend/theme/containers/ThemeProvider/ThemeProvider.model';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';
import React from 'react';

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useTheme();
  return <_ThemeProvider theme={theme}>{children}</_ThemeProvider>;
};
