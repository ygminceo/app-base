import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';
import { ThemeModel } from '@lib/frontend/theme/themes/theme.model';
import { defaultsDeep } from 'lodash';

export const DarkTheme: ThemeModel = defaultsDeep(
  {
    name: 'theme:labels.dark',
    isDark: true,
    colors: {
      border: '#e3e8ee',
      background: {
        primary: '#3c4257',
        contrast: '#FFF',
      },
      text: {
        primary: '#FFF',
        contrast: '#f9fafb',
      },
    },
  },
  CommonTheme,
);
