import { Platform as NativePlatform } from 'react-native';
import { config } from '@lib/common/core/utils/Config/Config';

const NODE_ENV = config.get<string>('NODE_ENV', '');

export class Platform {
  static isWebApp = typeof window !== 'undefined' && NativePlatform.OS === 'web';

  static isWebSsr = typeof window === 'undefined' && NativePlatform.OS === 'web';

  static isIos = NativePlatform.OS === 'ios';

  static isAndroid = NativePlatform.OS === 'android';

  static isDev = NODE_ENV === 'development';

  static isTest = NODE_ENV === 'test';

  static isNonProduction = this.isDev || this.isTest;
}
