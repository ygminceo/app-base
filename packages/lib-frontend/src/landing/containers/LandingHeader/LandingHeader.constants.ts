import { CompanyMenuOption } from '@lib/frontend/landing/containers';
import { LandingHeaderMenuOptionModel } from '@lib/frontend/landing/containers/LandingHeader/LandingHeader.model';
import { ProductsMenuOption } from '@lib/frontend/landing/containers/ProductsMenuOption/ProductsMenuOption';
import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';

export const LANDING_HEADER_MENU_OPTIONS: LandingHeaderMenuOptionModel[] = [
  {
    label: tLazy('landing:labels.products'),
    component: ProductsMenuOption,
  },
  {
    label: tLazy('landing:labels.company'),
    component: CompanyMenuOption,
  },
];
