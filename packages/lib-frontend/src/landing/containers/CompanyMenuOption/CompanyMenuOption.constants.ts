import { ABOUT, CAREERS } from '@lib/common/landing/constants';
import { LinkModel } from '@lib/frontend/core/components/Link/Link.model';
import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';

export const COMPANY_MENU_OPTION_LINKS: LinkModel[] = [
  { pathname: `/${ABOUT}`, label: tLazy('landing:labels.about'), icon: 'info-circle' },
  { pathname: `/${CAREERS}`, label: tLazy('landing:labels.careers'), icon: 'briefcase' },
];
