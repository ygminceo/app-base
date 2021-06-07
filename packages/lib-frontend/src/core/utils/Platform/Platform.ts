import { Platform as NativePlatform } from 'react-native';

export class Platform {
  static isWebApp = window !== undefined && NativePlatform.OS === 'web';

  static isIos = NativePlatform.OS === 'ios';

  static isAndroid = NativePlatform.OS === 'android';
}
