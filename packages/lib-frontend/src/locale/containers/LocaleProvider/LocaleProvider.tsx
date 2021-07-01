import i18n, { InitOptions } from 'i18next';
import { resolve } from 'path';
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
import { ROOT_PATH } from '../../../../../../constants';

const loadResources = Platform.isWebSsr || Platform.isTest;

let resources = {};
if (loadResources) {
  const { readdirSync } = require('fs');
  resources = {
    resources: i18nConfig.supportedLngs.reduce((result, locale) => {
      const localeDir = resolve(ROOT_PATH, `packages/lib-assets/src/public/locales/${locale}`);
      return {
        ...result,
        [locale]: (readdirSync(localeDir) as string[]).reduce(
          (subResult, filename) => ({
            ...subResult,
            [filename.replace('.json', '')]: require(resolve(localeDir, filename)),
          }),
          {},
        ),
      };
    }, {}),
  };
} else {
  i18n.use(_Backend).use(_Detector);
}

i18n.use(initReactI18next).init({
  ...(i18nConfig as InitOptions),
  ...resources,
  backend,
  detection,
});

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  return <>{children}</>;
};
