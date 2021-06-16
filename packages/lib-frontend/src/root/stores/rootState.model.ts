import { ACCOUNT } from '@lib/common/account/constants';
import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { LOCALE } from '@lib/common/locale/constants';
import { THEME } from '@lib/common/theme/constants';
import { AccountStateModel } from '@lib/frontend/account/stores/accountState.model';
import { AuthenticationStateModel } from '@lib/frontend/authentication/stores/authenticationState.model';
import { LocaleStateModel } from '@lib/frontend/locale/stores/localeState.model';
import { ThemeStateModel } from '@lib/frontend/theme/stores/themeState.model';

export interface RootStateModel {
  [ACCOUNT]: AccountStateModel;
  [AUTHENTICATION]: AuthenticationStateModel;
  [LOCALE]: LocaleStateModel;
  [THEME]: ThemeStateModel;
}
