import { SETTINGS } from '@lib/common/settings/constants';
import { signOutAction } from '@lib/frontend/authentication/actions/signOut/signOut.action';
import { MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.model';
import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';
import { store } from '@lib/frontend/root/stores/store';

export const APP_SIDE_MENU_ID = 'app-side-menu';

export const APP_SIDE_MENU_WIDTH = 200;

export const APP_SIDE_MENU_OPTIONS: MenuOptionModel[] = [
  {
    icon: 'settings',
    value: 'settings',
    label: tLazy('settings:labels.settings'),
    pathname: SETTINGS,
  },
  { divider: true },
  {
    icon: 'signout',
    value: 'signout',
    label: tLazy('authentication:labels.signOut'),
    onPress: () => store.dispatch(signOutAction()),
    error: true,
  },
];
