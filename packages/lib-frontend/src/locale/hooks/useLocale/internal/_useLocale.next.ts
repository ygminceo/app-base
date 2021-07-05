import { get, trimEnd } from 'lodash';
import { _UseLocaleReturnsModel } from '@lib/frontend/locale/hooks/useLocale/internal/_useLocale.model';
import i18nConfig from '@lib/frontend/locale/i18n/i18n.config.js';
import { useRouter } from '@lib/frontend/routing/hooks';

export const _useLocale = (): _UseLocaleReturnsModel => {
  const router = useRouter();
  return {
    currentLocale: get(router, ['location', 'params', 'locale'], i18nConfig.fallbackLng),
    onLocaleChange: (locale: string) => {
      const currentLocale = get(router, ['location', 'params', 'locale'], i18nConfig.fallbackLng);
      const path = `/${locale}/${router.location.pathname.replace(currentLocale, '')}`;
      router.push(trimEnd(path, '/'));
    },
  };
};
