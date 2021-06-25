import { Mixpanel } from 'mixpanel-react-native';
import { config } from '@lib/common/core/utils/Config/Config';
import { UsageContextModel } from '@lib/frontend/usage/containers/UsageProvider/UsageProvider.model';

const REACT_APP_MIXPANEL_TOKEN = config.get<string>('REACT_APP_MIXPANEL_TOKEN', '');

export const _initialize = (): Promise<UsageContextModel> =>
  Mixpanel.init(REACT_APP_MIXPANEL_TOKEN);
