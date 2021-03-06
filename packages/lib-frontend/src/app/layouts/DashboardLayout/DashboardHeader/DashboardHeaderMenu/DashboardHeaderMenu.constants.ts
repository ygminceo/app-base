import { BILLING } from '@lib/common/billing/constants';
import { DASHBOARD } from '@lib/common/dashboard/constants';
import { SETTINGS } from '@lib/common/settings/constants';
import { signOutAction } from '@lib/frontend/authentication/actions/signOut/signOut.action';
import { MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.model';
import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';
import { store } from '@lib/frontend/root/stores/store';

export const DASHBOARD_HEADER_MENU_OPTIONS: MenuOptionModel[] = [
  {
    icon: 'settings',
    value: 'settings',
    label: tLazy('settings:labels.settings'),
    pathname: `/${DASHBOARD}/${SETTINGS}`,
  },
  {
    icon: 'card',
    value: 'billing',
    label: tLazy('billing:labels.billing'),
    pathname: `/${DASHBOARD}/${BILLING}`,
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
