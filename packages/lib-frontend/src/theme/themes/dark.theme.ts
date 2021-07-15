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
        // main: '#3c4257',
        main: '#000',
        muted: '#d6d6d6',
        contrast: '#f5f5f5',
      },
      text: {
        main: '#f5f5f5',
        muted: '#e5e5e5',
        contrast: '#f9fafb',
      },
    },
  },
  CommonTheme,
);
