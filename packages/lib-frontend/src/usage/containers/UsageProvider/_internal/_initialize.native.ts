import { config } from '@lib/common/core/utils/Config/Config';
import { Mixpanel } from 'mixpanel-react-native';

const REACT_APP_MIXPANEL_TOKEN = config.get<string>('REACT_APP_MIXPANEL_TOKEN', '');

export const _initialize = () => Mixpanel.init(REACT_APP_MIXPANEL_TOKEN);
