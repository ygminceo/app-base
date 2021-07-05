import mixpanel from 'mixpanel-browser';
import { config } from '@lib/common/core/utils/Config/Config';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';
import { UsageContextModel } from '@lib/frontend/usage/containers/UsageProvider/UsageProvider.model';

const REACT_APP_MIXPANEL_TOKEN = config.get<string>('REACT_APP_MIXPANEL_TOKEN', '');

export const _initialize = (): Promise<UsageContextModel | null> =>
  new Promise((resolve) => {
    if (Platform.isWebApp) {
      mixpanel.init(REACT_APP_MIXPANEL_TOKEN);
      return resolve({
        identify: mixpanel.identify,
        reset: mixpanel.reset,
        track: (event) => mixpanel.track(`${event.object} ${event.action}`, event.params),
      });
    }
    return resolve(null);
  });
