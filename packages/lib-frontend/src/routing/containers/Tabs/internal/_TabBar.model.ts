import { RouteClassModel } from '@lib/frontend/routing/containers/Router/Router.model';

export interface _TabBarProps {
  active: number;
  routes: (RouteClassModel & { onPress: () => any })[];
}
