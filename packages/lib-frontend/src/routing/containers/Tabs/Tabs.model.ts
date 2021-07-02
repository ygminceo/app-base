import { ComponentType } from 'react';

export interface TabModel {
  title: string;
  icon?: string;
  component: ComponentType;
}

export interface TabsProps {}
