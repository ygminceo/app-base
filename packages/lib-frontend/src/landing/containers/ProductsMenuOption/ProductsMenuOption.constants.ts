import { ABOUT, CAREERS } from '@lib/common/landing/constants';
import { LinkModel } from '@lib/frontend/core/components/Link/Link.model';
import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';

export const PRODUCTS_MENU_OPTION_LINKS: LinkModel[] = [
  { pathname: `/${ABOUT}`, label: tLazy('app:labels.product1'), icon: 'cube' },
  { pathname: `/${CAREERS}`, label: tLazy('app:labels.product2'), icon: 'cube' },
];
