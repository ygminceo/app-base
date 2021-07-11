import { get } from 'lodash';
import { _UseLocaleReturnsModel } from '@lib/frontend/locale/hooks/useLocale/internal/_useLocale.model';
import i18nConfig from '@lib/frontend/locale/i18n/i18n.config.js';
import { useRouter } from '@lib/frontend/routing/hooks';

export const _useLocale = (): _UseLocaleReturnsModel => {
  const router = useRouter();
  const currentLocale = get(router, ['location', 'params', 'locale'], i18nConfig.fallbackLng);
  return {
    currentLocale,
    onLocaleChange: (locale: string) => router.push(router.location.pathname, { locale }),
  };
};
