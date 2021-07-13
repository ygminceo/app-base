import { useEffect } from 'react';
import { ANALYTICS_ACTION_OPEN, ANALYTICS_OBJECT_PAGE } from '@lib/common/analytics/constants';
import { AnalyticsEventPageOpenModel } from '@lib/common/analytics/models';
import { useAnalytics } from '@lib/frontend/analytics/hooks';
import { UsePageAnalyticsParamsModel } from '@lib/frontend/analytics/hooks/usePageAnalytics/usePageAnalytics.model';
import { useRouter } from '@lib/frontend/routing/hooks';

export const usePageAnalytics = ({ name }: UsePageAnalyticsParamsModel) => {
  const { track, isReady } = useAnalytics();
  const router = useRouter();

  useEffect(() => {
    if (isReady) {
      track<AnalyticsEventPageOpenModel>({
        object: ANALYTICS_OBJECT_PAGE,
        action: ANALYTICS_ACTION_OPEN,
        params: { name, pathname: router.location.pathname, params: router.location.params },
      });
    }
  }, [isReady]);
};
