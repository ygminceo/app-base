import { ComponentType } from 'react';
import { RouteLinkModel } from '@lib/frontend/routing/components/RouteLink/RouteLink.model';

export interface LandingHeaderMenuOptionModel {
  title: string;
  component: ComponentType;
}

export interface LandingHeaderProps {}

export interface LandingHeaderLinkGroupModel {
  label: string;
  icon: string;
  links: RouteLinkModel[];
}
