import i18n, { InitOptions } from 'i18next';
import React from 'react';
import { initReactI18next } from 'react-i18next';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';
import { LocaleProviderProps } from '@lib/frontend/locale/containers/LocaleProvider/LocaleProvider.model';
import {
  backend,
  _Backend,
} from '@lib/frontend/locale/containers/LocaleProvider/internal/_Backend';
import {
  detection,
  _Detector,
} from '@lib/frontend/locale/containers/LocaleProvider/internal/_Detector';
import i18nConfig from '@lib/frontend/locale/i18n/i18n.config.js';

if (!Platform.isWebSsr) {
  i18n
    .use(_Backend)
    .use(_Detector)
    .use(initReactI18next)
    .init({
      ...(i18nConfig as InitOptions),
      backend,
      detection,
    });
}

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  return <>{children}</>;
};
