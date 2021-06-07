import { ThemeProviderProps } from '@lib/frontend/theme/containers/ThemeProvider/ThemeProvider.model';
import { Theme } from '@lib/frontend/theme/themes/theme.model';

export interface _ThemeProviderProps extends ThemeProviderProps {
  theme: Theme;
}
