import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';
import { Theme } from '@lib/frontend/theme/themes/theme.model';
import { defaultsDeep } from 'lodash';

export const DarkTheme: Theme = defaultsDeep(
  {
    name: 'theme:labels.dark',
    dark: true,
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
