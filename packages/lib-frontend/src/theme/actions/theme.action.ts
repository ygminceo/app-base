import { ThemeModel } from '@lib/frontend/theme/themes/theme.model';
import { THEME } from '@lib/common/theme/constants';
import { createAction } from '@reduxjs/toolkit';

export const themeSetAction = createAction<ThemeModel>(`${THEME}/THEME_SET`);
