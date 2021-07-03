import { LandingHeaderMenuOptionModel } from '@lib/frontend/landing/containers/LandingHeader/LandingHeader.model';
import { ProductsMenuOption } from '@lib/frontend/landing/containers/LandingHeader/ProductsMenuOption/ProductsMenuOption';
import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';

export const LANDING_HEADER_MENU_OPTIONS: LandingHeaderMenuOptionModel[] = [
  {
    title: tLazy('app:labels.products'),
    component: ProductsMenuOption,
  },
];
