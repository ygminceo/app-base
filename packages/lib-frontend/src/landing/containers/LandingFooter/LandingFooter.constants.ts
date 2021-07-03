import { LandingFooterLinkGroupModel } from '@lib/frontend/landing/containers/LandingFooter/LandingFooter.model';
import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';

export const LANDING_FOOTER_LINK_GROUPS: LandingFooterLinkGroupModel[] = [
  {
    title: tLazy('landing:labels.company'),
    icon: 'building',
    links: [
      { pathname: '', title: tLazy('landing:labels.about'), icon: 'info-circle' },
      { pathname: '', title: tLazy('landing:labels.jobs'), icon: 'briefcase' },
    ],
  },
  {
    title: tLazy('landing:labels.resources'),
    icon: 'book',
    links: [{ pathname: '', title: tLazy('landing:labels.support'), icon: 'chat' }],
  },
];
