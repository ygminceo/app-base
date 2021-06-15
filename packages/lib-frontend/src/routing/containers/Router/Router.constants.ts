import { ACCOUNT } from '@lib/common/account/constants';
import { PAYMENT } from '@lib/common/payment/constants';
import { SETTINGS } from '@lib/common/settings/constants';
import { AccountPage } from '@lib/frontend/account/pages';
import { CatalogPage } from '@lib/frontend/admin/pages';
import { EventPage } from '@lib/frontend/event/pages/Event/Event.page';
import { PaymentPage } from '@lib/frontend/payment/pages';
import { RouteClassModel } from '@lib/frontend/routing/containers/Router/Router.model';
import { SettingsPage } from '@lib/frontend/settings/pages';

export const ROUTES: RouteClassModel[] = [
  {
    pathname: 'event',
    component: EventPage,
  },
  {
    pathname: PAYMENT,
    component: PaymentPage,
    protected: true,
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
