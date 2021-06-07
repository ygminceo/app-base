import { AccountState } from '@lib/frontend/account/stores/accountState.model';
import { AuthenticationState } from '@lib/frontend/authentication/stores/authenticationState.model';
import { LocaleState } from '@lib/frontend/locale/stores/localeState.model';
import { ThemeState } from '@lib/frontend/theme/stores/themeState.model';
import { ACCOUNT } from '@lib/common/account/constants';
import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { LOCALE } from '@lib/common/locale/constants';
import { THEME } from '@lib/common/theme/constants';

export interface RootState {
  [ACCOUNT]: AccountState;
  [AUTHENTICATION]: AuthenticationState;
  [LOCALE]: LocaleState;
  [THEME]: ThemeState;
}
