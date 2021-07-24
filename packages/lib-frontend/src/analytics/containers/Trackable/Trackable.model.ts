import { AnalyticsEventModel } from '@lib/common/analytics/models';

export interface TrackableProps {
  trackable?: Pick<AnalyticsEventModel, 'object' | 'params'>;
}
