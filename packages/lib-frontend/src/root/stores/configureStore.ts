import { configureStore as configure } from '@reduxjs/toolkit';
import { PreloadedState } from 'redux';
import { APP } from '@lib/common/app/constants';
import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { CHAT } from '@lib/common/chat/constants';
import { LOCALE } from '@lib/common/locale/constants';
import { THEME } from '@lib/common/theme/constants';
import { USER } from '@lib/common/user/constants';
import { appReducer } from '@lib/frontend/app/stores/app.reducer';
import { authenticationReducer } from '@lib/frontend/authentication/stores/authentication.reducer';
import { chatReducer } from '@lib/frontend/chat/stores/chat.reducer';
import { localeReducer } from '@lib/frontend/locale/stores/locale.reducer';
import { RootStateModel } from '@lib/frontend/root/stores/rootState.model';
import { themeReducer } from '@lib/frontend/theme/stores/theme.reducer';
import { userReducer } from '@lib/frontend/user/stores/user.reducer';

export const configureStore = (initialState?: PreloadedState<RootStateModel>) =>
  configure<RootStateModel>({
    reducer: {
      [APP]: appReducer,
      [CHAT]: chatReducer,
      [USER]: userReducer,
      [AUTHENTICATION]: authenticationReducer,
      [LOCALE]: localeReducer,
      [THEME]: themeReducer,
    },
    preloadedState: initialState,
  });
