import { ABOUT, CAREERS } from '@lib/common/landing/constants';
import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';
import { RouteLinkModel } from '@lib/frontend/routing/components/RouteLink/RouteLink.model';

export const COMPANY_MENU_OPTION_LINKS: RouteLinkModel[] = [
  { pathname: `/${ABOUT}`, label: tLazy('landing:labels.about'), icon: 'info-circle' },
  { pathname: `/${CAREERS}`, label: tLazy('landing:labels.careers'), icon: 'briefcase' },
];
