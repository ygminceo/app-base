export type ParamsType = { [key: string]: any };

export interface UseRouterReturns {
  location: { pathname: string; params?: object };
  push<P extends ParamsType>(pathname: string, params?: P): any;
  replace<P extends ParamsType>(pathname: string, params?: P): any;
  back(): any;
}
