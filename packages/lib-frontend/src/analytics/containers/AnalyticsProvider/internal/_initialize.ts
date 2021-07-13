import mixpanel from 'mixpanel-browser';
import { config } from '@lib/common/core/utils/Config/Config';
import { AnalyticsContextModel } from '@lib/frontend/analytics/containers/AnalyticsProvider/AnalyticsProvider.model';

const REACT_APP_MIXPANEL_API_KEY = config.get<string>('REACT_APP_MIXPANEL_API_KEY', '');

export const _initialize = async (): Promise<AnalyticsContextModel | null> =>
  new Promise((resolve) => {
    mixpanel.init(REACT_APP_MIXPANEL_API_KEY);
    return resolve({
      isReady: true,
      identify: (uid: string) => mixpanel.identify(uid),
      reset: () => mixpanel.reset(),
      track: (event) => mixpanel.track(`${event.object} ${event.action}`, event.params),
    });
  });
