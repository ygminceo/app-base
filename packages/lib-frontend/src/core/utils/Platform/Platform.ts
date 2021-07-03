import { Platform as NativePlatform } from 'react-native';
import { config } from '@lib/common/core/utils/Config/Config';

const NODE_ENV = config.get<string>('NODE_ENV', '');

export class Platform {
  static isWebApp = typeof window !== 'undefined' && NativePlatform.OS === 'web';

  static isSsr = typeof window === 'undefined' && NativePlatform.OS === 'web';

  static isIos = NativePlatform.OS === 'ios';

  static isAndroid = NativePlatform.OS === 'android';

  static isNative = Platform.isIos || Platform.isAndroid;

  static isDev = NODE_ENV === 'development';

  static isTest = NODE_ENV === 'test';

  static isNonProduction = Platform.isDev || Platform.isTest;

  static isServer = Platform.isSsr || Platform.isTest;

  static isTouch =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
}
