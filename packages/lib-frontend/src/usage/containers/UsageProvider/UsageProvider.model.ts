import { PropsWithChildren } from 'react';

export interface UsageProviderProps extends PropsWithChildren<{}> {}

export type UsageContextModel = {
  identify(name: string): any;
  reset(): any;
  track(name: string, params?: object): any;
};
