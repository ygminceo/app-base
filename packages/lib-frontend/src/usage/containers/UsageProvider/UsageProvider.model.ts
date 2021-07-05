import { PropsWithChildren } from 'react';
import { UsageEventModel } from '@lib/common/usage/models';

export interface UsageProviderProps extends PropsWithChildren<{}> {}

export type UsageContextModel = {
  isReady: boolean;
  identify(name: string): any;
  reset(): any;
  track<T>(event: UsageEventModel<T>): any;
};
