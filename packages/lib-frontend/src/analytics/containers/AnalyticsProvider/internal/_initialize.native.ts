import { Mixpanel } from 'mixpanel-react-native';
import { config } from '@lib/common/core/utils/Config/Config';
import { AnalyticsContextModel } from '@lib/frontend/analytics/containers/AnalyticsProvider/AnalyticsProvider.model';

const REACT_APP_MIXPANEL_API_KEY = config.get<string>('REACT_APP_MIXPANEL_API_KEY', '');

export const _initialize = async (): Promise<AnalyticsContextModel> => {
  const mixpanel = await Mixpanel.init(REACT_APP_MIXPANEL_API_KEY);
  return {
    isReady: true,
    identify: (uid: string) => mixpanel.identify(uid),
    reset: () => mixpanel.reset(),
    track: (event) => mixpanel.track(`${event.object} ${event.action}`, event.params),
  };
};
