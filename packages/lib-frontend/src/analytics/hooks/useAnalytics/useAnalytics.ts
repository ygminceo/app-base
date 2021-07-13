import { useContext } from 'react';
import { AnalyticsContext } from '@lib/frontend/analytics/containers/AnalyticsProvider/AnalyticsProvider';
import { AnalyticsContextModel } from '@lib/frontend/analytics/containers/AnalyticsProvider/AnalyticsProvider.model';

export const useAnalytics = () => {
  const analytics = useContext<AnalyticsContextModel>(AnalyticsContext);
  return analytics;
};
