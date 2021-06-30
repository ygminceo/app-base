import { APP } from '@lib/common/app/constants';
import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { LOCALE } from '@lib/common/locale/constants';
import { THEME } from '@lib/common/theme/constants';
import { USER } from '@lib/common/user/constants';
import { AppStateModel } from '@lib/frontend/app/stores/appState.model';
import { AuthenticationStateModel } from '@lib/frontend/authentication/stores/authenticationState.model';
import { LocaleStateModel } from '@lib/frontend/locale/stores/localeState.model';
import { ThemeStateModel } from '@lib/frontend/theme/stores/themeState.model';
import { UserStateModel } from '@lib/frontend/user/stores/userState.model';

export interface RootStateModel {
  [APP]: AppStateModel;
  [USER]: UserStateModel;
  [AUTHENTICATION]: AuthenticationStateModel;
  [LOCALE]: LocaleStateModel;
  [THEME]: ThemeStateModel;
}
