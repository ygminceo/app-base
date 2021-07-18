import mixpanel from 'mixpanel-browser';
import { config } from '@lib/common/core/utils/Config/Config';
import { analyticsMock } from '@lib/frontend/analytics/containers/AnalyticsProvider/AnalyticsProvider';
import { AnalyticsContextModel } from '@lib/frontend/analytics/containers/AnalyticsProvider/AnalyticsProvider.model';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';

const REACT_APP_MIXPANEL_API_KEY = config.get<string>('REACT_APP_MIXPANEL_API_KEY', '');

export const _initialize = async (): Promise<AnalyticsContextModel> =>
  new Promise((resolve) => {
    if (Platform.isWeb) {
      mixpanel.init(REACT_APP_MIXPANEL_API_KEY);
      return resolve({
        isReady: true,
        identify: (uid: string) => mixpanel.identify(uid),
        reset: () => mixpanel.reset(),
        track: (event) => mixpanel.track(`${event.object} ${event.action}`, event.params),
      });
    }
    return resolve(analyticsMock);
  });
