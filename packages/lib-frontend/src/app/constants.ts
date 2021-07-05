import { AlertMessageModel } from '@lib/frontend/core/components/Alert/Alert.model';
import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';

export const NETWORK_ALERT: AlertMessageModel = {
  icon: 'internet',
  message: tLazy('app:messages.networkError'),
  error: true,
};
