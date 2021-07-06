import { CompanyMenuOption } from '@lib/frontend/landing/containers';
import { LandingHeaderMenuOptionModel } from '@lib/frontend/landing/containers/LandingHeader/LandingHeader.model';
import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';

export const LANDING_HEADER_MENU_OPTIONS: LandingHeaderMenuOptionModel[] = [
  // {
  //   title: tLazy('landing:labels.products'),
  //   component: ProductsMenuOption,
  // },
  {
    title: tLazy('landing:labels.company'),
    component: CompanyMenuOption,
  },
];
