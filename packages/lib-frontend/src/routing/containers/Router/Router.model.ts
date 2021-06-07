import { ComponentType } from 'react';

export interface RouteClass<P = {}> {
  pathname: string;
  component?: ComponentType<any>;
  props?: P;
  protected?: boolean;
  routes?: RouteClass[];
}

export interface RouterProps {
  routes: RouteClass[];
}
