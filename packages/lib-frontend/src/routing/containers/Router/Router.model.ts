import { ComponentType } from 'react';

export interface RouteClassModel<P = {}> {
  pathname: string;
  component?: ComponentType<any>;
  props?: P;
  protected?: boolean;
  routes?: RouteClassModel[];
}

export interface RouterProps {
  routes: RouteClassModel[];
}
