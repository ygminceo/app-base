import { ACCOUNT } from '@lib/common/account/constants';
import { HOME } from '@lib/common/app/constants';
import { PAYMENT } from '@lib/common/payment/constants';
import { SETTINGS } from '@lib/common/settings/constants';
import { AccountPage } from '@lib/frontend/account/pages';
import { CatalogPage } from '@lib/frontend/admin/pages';
import { HomePage } from '@lib/frontend/app/pages';
import { PaymentPage } from '@lib/frontend/payment/pages';
import { RouteClass } from '@lib/frontend/routing/containers/Router/Router.model';
import { SettingsPage } from '@lib/frontend/settings/pages';

export const ROUTES: RouteClass[] = [
  {
    pathname: PAYMENT,
    component: PaymentPage,
  },
  {
    pathname: HOME,
    component: HomePage,
  },
  {
    pathname: ACCOUNT,
    component: AccountPage,
    protected: true,
  },
  {
    pathname: SETTINGS,
    component: SettingsPage,
  },
  {
    pathname: 'catalog',
    component: CatalogPage,
  },
];
