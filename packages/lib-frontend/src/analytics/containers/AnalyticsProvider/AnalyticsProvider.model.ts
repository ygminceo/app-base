import { PropsWithChildren } from 'react';
import { AnalyticsEventModel } from '@lib/common/analytics/models';

export interface AnalyticsProviderProps extends PropsWithChildren<{}> {}

export type AnalyticsContextModel = {
  isReady: boolean;
  identify(uid: string): any;
  reset(): any;
  track<T>(event: AnalyticsEventModel<T>): any;
};
