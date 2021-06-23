import { ComponentType } from 'react';

export interface RouteModel<P = {}> {
  pathname: string;
  component?: ComponentType<any>;
  props?: P;
  protected?: boolean;
  routes?: RouteModel[];
}

export interface RouterProps {
  routes: RouteModel[];
}
