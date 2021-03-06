import { createReducer } from '@reduxjs/toolkit';
import { get } from 'lodash';
import { useSelector } from 'react-redux';
import { THEME } from '@lib/common/theme/constants';
import { RootStateModel } from '@lib/frontend/root/stores/rootState.model';
import { themeSetAction } from '@lib/frontend/theme/actions/theme.action';
import { ThemeStateModel } from '@lib/frontend/theme/stores/themeState.model';
import { LightTheme } from '@lib/frontend/theme/themes/light.theme';
// import { DarkTheme } from '@lib/frontend/theme/themes/dark.theme';
import { ThemeModel } from '@lib/frontend/theme/themes/theme.model';

// TODO: import default ThemeStateModel from user device
const initialState: ThemeStateModel = {
  theme: LightTheme,
};

export const themeReducer = createReducer<ThemeStateModel>(initialState, (builder) =>
  builder.addCase(themeSetAction, (state, action) => {
    state.theme = action.payload;
  }),
);

export const useTheme = <T = ThemeModel>(key?: string) => {
  const theme = useSelector<RootStateModel, ThemeModel>((state) => state[THEME].theme);
  return (key ? get(theme, key) : theme) as T;
};
