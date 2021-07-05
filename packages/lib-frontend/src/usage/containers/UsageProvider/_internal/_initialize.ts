import mixpanel from 'mixpanel-browser';
import { config } from '@lib/common/core/utils/Config/Config';
import { UsageContextModel } from '@lib/frontend/usage/containers/UsageProvider/UsageProvider.model';

const REACT_APP_MIXPANEL_TOKEN = config.get<string>('REACT_APP_MIXPANEL_TOKEN', '');

export const _initialize = async (): Promise<UsageContextModel | null> =>
  new Promise((resolve) => {
    mixpanel.init(REACT_APP_MIXPANEL_TOKEN);
    return resolve({
      isReady: true,
      identify: mixpanel.identify,
      reset: mixpanel.reset,
      track: (event) => mixpanel.track(`${event.object} ${event.action}`, event.params),
    });
  });
