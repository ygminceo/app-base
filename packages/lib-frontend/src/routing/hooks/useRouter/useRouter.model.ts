export type RouterParamsModel = { [key: string]: any };

export interface UseRouterReturnsModel {
  location: { pathname: string; params?: object };
  push<P extends RouterParamsModel>(pathname: string, params?: P): any;
  replace<P extends RouterParamsModel>(pathname: string, params?: P): any;
  back(): any;
}
