import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import {
  backend,
  _Backend,
} from '@lib/frontend/locale/containers/LocaleProvider/internal/_Backend';
import {
  detection,
  _Detector,
} from '@lib/frontend/locale/containers/LocaleProvider/internal/_Detector';
import i18nConfig from '@lib/frontend/locale/i18n/i18n.config.js';

i18n
  .use(_Backend)
  .use(_Detector)
  .use(initReactI18next)
  .init({
    ...(i18nConfig as InitOptions),
    backend,
    detection,
  });
