import { ACCOUNT } from '@lib/common/account/constants';
import { CATALOG } from '@lib/common/admin/constants';
import { APP } from '@lib/common/app/constants';
import { BILLING } from '@lib/common/billing/constants';
import { SETTINGS } from '@lib/common/settings/constants';
import { AccountPage } from '@lib/frontend/account/pages';
import { CatalogPage } from '@lib/frontend/admin/pages';
import { AppLayout } from '@lib/frontend/app/layouts';
import { BillingPage } from '@lib/frontend/billing/pages';
import { RouteModel } from '@lib/frontend/routing/containers/Router/Router.model';
import { SettingsPage } from '@lib/frontend/settings/pages';

export const ROUTES: RouteModel[] = [
  {
    pathname: APP,
    component: AppLayout,
    routes: [
      {
        pathname: BILLING,
        component: BillingPage,
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
        pathname: CATALOG,
        component: CatalogPage,
      },
    ],
  },
];
