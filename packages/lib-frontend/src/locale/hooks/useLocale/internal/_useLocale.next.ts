import { get } from 'lodash';
import { _UseLocaleReturnsModel } from '@lib/frontend/locale/hooks/useLocale/internal/_useLocale.model';
import i18nConfig from '@lib/frontend/locale/i18n/i18n.config.js';
import { useRouter } from '@lib/frontend/routing/hooks';

export const _useLocale = (): _UseLocaleReturnsModel => {
  const router = useRouter();
  const locale = get(router, ['location', 'params', 'locale'], i18nConfig.fallbackLng);
  return {
    locale,
    onLocaleChange: (locale: string) => router.push(router.location.pathname, { locale }),
  };
};
