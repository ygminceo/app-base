import { defaultsDeep } from 'lodash';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';
import { ThemeModel } from '@lib/frontend/theme/themes/theme.model';

export const LightTheme: ThemeModel = defaultsDeep(
  {
    name: 'theme:labels.light',
    isDark: false,
    colors: {
      border: '#ccd0d6',
      background: {
        main: '#f5f5f5',
        muted: '#eeeeee',
        contrast: '#171717',
      },
      text: {
        main: '#3c4257',
        muted: '#e5e5e5',
        contrast: '#f5f5f5',
      },
    },
  },
  CommonTheme,
);
