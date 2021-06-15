import { PropsWithChildren } from 'react';

export interface UsageProviderProps extends PropsWithChildren<{}> {}

export type UsageContextModel = {
  isInitialized: boolean;
  track: (name: string, params?: object) => any;
};
