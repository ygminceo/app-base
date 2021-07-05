import { ComponentType } from 'react';

export interface LandingHeaderMenuOptionModel {
  title: string;
  component: ComponentType;
}

export interface LandingHeaderProps {
  onContactModalOpen(): any;
}
