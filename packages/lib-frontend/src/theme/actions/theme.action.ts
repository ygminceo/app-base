import { createAction } from '@reduxjs/toolkit';
import { THEME } from '@lib/common/theme/constants';
import { ThemeModel } from '@lib/frontend/theme/themes/theme.model';

export const themeSetAction = createAction<ThemeModel>(`${THEME}/THEME_SET`);
