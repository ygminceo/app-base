import { RouteLinkModel } from '@lib/frontend/routing/components/RouteLink/RouteLink.model';

export interface LandingFooterProps {
  onContactModalOpen(): any;
}

export interface LandingFooterLinkGroupModel {
  label: string;
  icon: string;
  links: RouteLinkModel[];
}
