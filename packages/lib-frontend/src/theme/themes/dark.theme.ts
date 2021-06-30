import { defaultsDeep } from 'lodash';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';
import { ThemeModel } from '@lib/frontend/theme/themes/theme.model';

export const DarkTheme: ThemeModel = defaultsDeep(
  {
    name: 'theme:labels.dark',
    isDark: true,
    colors: {
      border: '#686868',
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
