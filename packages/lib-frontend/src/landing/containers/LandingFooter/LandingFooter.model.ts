import { LinkModel } from '@lib/frontend/core/components/Link/Link.model';

export interface LandingFooterProps {}

export interface LandingFooterLinkGroupModel {
  label: string;
  icon: string;
  links: LinkModel[];
}
