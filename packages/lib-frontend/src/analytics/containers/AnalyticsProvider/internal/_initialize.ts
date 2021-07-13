import { config } from '@lib/common/core/utils/Config/Config';
import { analyticsMock } from '@lib/frontend/analytics/containers/AnalyticsProvider/AnalyticsProvider';
import { AnalyticsContextModel } from '@lib/frontend/analytics/containers/AnalyticsProvider/AnalyticsProvider.model';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';
import { identify, init, reset, track } from 'mixpanel-browser';

const REACT_APP_MIXPANEL_API_KEY = config.get<string>('REACT_APP_MIXPANEL_API_KEY', '');

export const _initialize = async (): Promise<AnalyticsContextModel> =>
  new Promise((resolve) => {
    if (Platform.isWeb) {
      init(REACT_APP_MIXPANEL_API_KEY);
      console.warn('******');
      console.warn(REACT_APP_MIXPANEL_API_KEY);
      console.warn('******');
      return resolve({
        isReady: true,
        identify: (uid: string) => identify(uid),
        reset: () => reset(),
        track: (event) => track(`${event.object} ${event.action}`, event.params),
      });
    }
    return resolve(analyticsMock);
  });
