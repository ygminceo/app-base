import { NativeModules } from 'react-native';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';

const locale = Platform.isIos
  ? NativeModules.SettingsManager.settings.AppleLocale ||
    NativeModules.SettingsManager.settings.AppleLanguages[0]
  : NativeModules.I18nManager.localeIdentifier;

export const _Detector = {
  init: Function.prototype,
  cacheUserLanguage: Function.prototype,
  type: 'languageDetector',
  detect: () => locale.replace(/_/, '-'),
};

export const detection = {};
