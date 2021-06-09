import { PropsWithChildren } from 'react';

export interface UsageProviderProps extends PropsWithChildren<{}> {}

export type UsageContextType = {
  isInitialized: boolean;
  track: (name: string, params?: object) => any;
};
