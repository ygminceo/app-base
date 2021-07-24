import { ObjectModel } from '@lib/common/core/models';

export interface UseRouterReturnsModel {
  location: { pathname: string; params?: object };
  push<P extends ObjectModel>(pathname: string, params?: P): any;
  replace<P extends ObjectModel>(pathname: string, params?: P): any;
  back(): any;
}
