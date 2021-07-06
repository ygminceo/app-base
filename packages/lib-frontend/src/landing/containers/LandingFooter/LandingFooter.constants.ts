import { COMPANY_MENU_OPTION_LINKS } from '@lib/frontend/landing/containers/CompanyMenuOption/CompanyMenuOption.constants';
import { LandingFooterLinkGroupModel } from '@lib/frontend/landing/containers/LandingFooter/LandingFooter.model';
import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';

export const LANDING_FOOTER_LINK_GROUPS: LandingFooterLinkGroupModel[] = [
  {
    label: tLazy('landing:labels.company'),
    icon: 'building',
    links: COMPANY_MENU_OPTION_LINKS,
  },
];
