import { ComponentType } from 'react';
import { LinkModel } from '@lib/frontend/core/components/Link/Link.model';

export interface LandingHeaderMenuOptionModel {
  label: string;
  component: ComponentType;
}

export interface LandingHeaderProps {}

export interface LandingHeaderLinkGroupModel {
  label: string;
  icon: string;
  links: LinkModel[];
}
