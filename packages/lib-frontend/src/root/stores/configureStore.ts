import { accountReducer } from '@lib/frontend/account/stores/account.reducer';
import { authenticationReducer } from '@lib/frontend/authentication/stores/authentication.reducer';
import { localeReducer } from '@lib/frontend/locale/stores/locale.reducer';
import { RootStateModel } from '@lib/frontend/root/stores/rootState.model';
import { themeReducer } from '@lib/frontend/theme/stores/theme.reducer';
import { ACCOUNT } from '@lib/common/account/constants';
import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { LOCALE } from '@lib/common/locale/constants';
import { THEME } from '@lib/common/theme/constants';
import { configureStore as configure } from '@reduxjs/toolkit';
import { PreloadedState } from 'redux';

export const configureStore = (initialState?: PreloadedState<RootStateModel>) =>
  configure<RootStateModel>({
    reducer: {
      [ACCOUNT]: accountReducer,
      [AUTHENTICATION]: authenticationReducer,
      [LOCALE]: localeReducer,
      [THEME]: themeReducer,
    },
    preloadedState: initialState,
  });
