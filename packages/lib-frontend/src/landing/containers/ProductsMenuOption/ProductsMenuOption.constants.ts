import { ABOUT, CAREERS } from '@lib/common/landing/constants';
import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';
import { RouteLinkModel } from '@lib/frontend/routing/components/RouteLink/RouteLink.model';

export const PRODUCTS_MENU_OPTION_LINKS: RouteLinkModel[] = [
  { pathname: `/${ABOUT}`, label: tLazy('app:labels.product1'), icon: 'cube' },
  { pathname: `/${CAREERS}`, label: tLazy('app:labels.product2'), icon: 'cube' },
];
