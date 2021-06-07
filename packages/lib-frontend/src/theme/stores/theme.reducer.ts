import { RootState } from '@lib/frontend/root/stores/rootState.model';
import { themeSetAction } from '@lib/frontend/theme/actions/theme.action';
import { ThemeState } from '@lib/frontend/theme/stores/themeState.model';
import { LightTheme } from '@lib/frontend/theme/themes/light.theme';
import { Theme } from '@lib/frontend/theme/themes/theme.model';
import { THEME } from '@lib/common/theme/constants';
import { createReducer } from '@reduxjs/toolkit';
import { get } from 'lodash';
import { useSelector } from 'react-redux';

// TODO: import default ThemeState from user device
const initialState: ThemeState = {
  theme: LightTheme,
};

export const themeReducer = createReducer<ThemeState>(initialState, (builder) =>
  builder.addCase(themeSetAction, (state, action) => {
    state.theme = action.payload;
  }),
);

export const useTheme = <T = Theme>(key?: string) => {
  const theme = useSelector<RootState, Theme>((state) => state[THEME].theme);
  return (key ? get(theme, key) : theme) as T;
};
