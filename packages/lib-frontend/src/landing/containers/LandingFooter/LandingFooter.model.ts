import { RouteLinkModel } from '@lib/frontend/routing/components/RouteLink/RouteLink.model';

export interface LandingFooterProps {}

export interface LandingFooterLinkGroupModel {
  label: string;
  icon: string;
  links: RouteLinkModel[];
}
