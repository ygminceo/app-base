import { CATALOG } from '@lib/common/admin/constants';
import { APP } from '@lib/common/app/constants';
import { BILLING } from '@lib/common/billing/constants';
import { SETTINGS } from '@lib/common/settings/constants';
import { USER } from '@lib/common/user/constants';
import { CatalogPage } from '@lib/frontend/admin/pages';
import { AppLayout } from '@lib/frontend/app/layouts';
import { BillingPage } from '@lib/frontend/billing/pages';
import { RouteModel } from '@lib/frontend/routing/containers/Router/Router.model';
import { SettingsPage } from '@lib/frontend/settings/pages';
import { UserPage } from '@lib/frontend/user/pages';

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
        pathname: USER,
        component: UserPage,
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
