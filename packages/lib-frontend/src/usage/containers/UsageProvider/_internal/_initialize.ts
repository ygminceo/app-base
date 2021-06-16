import mixpanel from 'mixpanel-browser';
import { config } from '@lib/common/core/utils/Config/Config';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';

const REACT_APP_MIXPANEL_TOKEN = config.get<string>('REACT_APP_MIXPANEL_TOKEN', '');

export const _initialize = () =>
  new Promise((resolve) => {
    if (Platform.isWebApp) {
      mixpanel.init(REACT_APP_MIXPANEL_TOKEN);
      return resolve(mixpanel);
    }
    return resolve(null);
  });
