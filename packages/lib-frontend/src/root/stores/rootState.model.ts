import { APP } from '@lib/common/app/constants';
import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { CHAT } from '@lib/common/chat/constants';
import { DASHBOARD } from '@lib/common/dashboard/constants';
import { LOCALE } from '@lib/common/locale/constants';
import { THEME } from '@lib/common/theme/constants';
import { USER } from '@lib/common/user/constants';
import { AppStateModel } from '@lib/frontend/app/stores/appState.model';
import { AuthenticationStateModel } from '@lib/frontend/authentication/stores/authenticationState.model';
import { ChatStateModel } from '@lib/frontend/chat/stores/chat.model';
import { DashboardStateModel } from '@lib/frontend/dashboard/stores/dashboardState.model';
import { LocaleStateModel } from '@lib/frontend/locale/stores/localeState.model';
import { ThemeStateModel } from '@lib/frontend/theme/stores/themeState.model';
import { UserStateModel } from '@lib/frontend/user/stores/userState.model';

export interface RootStateModel {
  [APP]: AppStateModel;
  [CHAT]: ChatStateModel;
  [DASHBOARD]: DashboardStateModel;
  [USER]: UserStateModel;
  [AUTHENTICATION]: AuthenticationStateModel;
  [LOCALE]: LocaleStateModel;
  [THEME]: ThemeStateModel;
}
