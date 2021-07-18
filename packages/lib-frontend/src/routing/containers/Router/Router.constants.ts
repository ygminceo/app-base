import { ADMIN, CATALOG, SCRATCHPAD } from '@lib/common/admin/constants';
import { BILLING } from '@lib/common/billing/constants';
import { DASHBOARD } from '@lib/common/dashboard/constants';
import { SETTINGS } from '@lib/common/settings/constants';
import { USER } from '@lib/common/user/constants';
import { CatalogPage, ScratchPadPage } from '@lib/frontend/admin/pages';
import { DashboardLayout } from '@lib/frontend/app/layouts';
import { BillingPage } from '@lib/frontend/billing/pages';
import { RouteModel } from '@lib/frontend/routing/containers/Router/Router.model';
import { SettingsPage } from '@lib/frontend/settings/pages';
import { UserPage } from '@lib/frontend/user/pages';

export const ROUTES: RouteModel[] = [
  {
    pathname: `/${DASHBOARD}`,
    component: DashboardLayout,
    routes: [
      {
        pathname: `/${SETTINGS}`,
        component: SettingsPage,
      },
      {
        pathname: `/${BILLING}`,
        component: BillingPage,
        protected: true,
      },
      {
        pathname: `/${USER}`,
        component: UserPage,
        protected: true,
      },
      {
        pathname: `/${CATALOG}`,
        component: CatalogPage,
      },
      {
        pathname: `/${DASHBOARD}`,
        component: CatalogPage,
      },
    ],
  },
  {
    pathname: `/${ADMIN}`,
    routes: [
      {
        pathname: `/${CATALOG}`,
        component: CatalogPage,
      },
      {
        pathname: `/${SCRATCHPAD}`,
        component: ScratchPadPage,
      },
    ],
  },
];
