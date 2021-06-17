import { ACCOUNT } from '@lib/common/account/constants';
import { CATALOG } from '@lib/common/admin/constants';
import { BILLING } from '@lib/common/billing/constants';
import { SETTINGS } from '@lib/common/settings/constants';
import { AccountPage } from '@lib/frontend/account/pages';
import { CatalogPage } from '@lib/frontend/admin/pages';
import { BillingPage } from '@lib/frontend/billing/pages';
import { RouteClassModel } from '@lib/frontend/routing/containers/Router/Router.model';
import { SettingsPage } from '@lib/frontend/settings/pages';

export const ROUTES: RouteClassModel[] = [
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
];
