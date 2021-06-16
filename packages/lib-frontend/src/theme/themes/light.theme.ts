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
        primary: '#FFF',
        contrast: '#000',
      },
      text: {
        primary: '#3c4257',
        contrast: '#FFF',
      },
    },
  },
  CommonTheme,
);
