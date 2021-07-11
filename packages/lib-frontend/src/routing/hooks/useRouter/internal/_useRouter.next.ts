import { get } from 'lodash';
import { useRouter } from 'next/router';
import i18nConfig from '@lib/frontend/locale/i18n/i18n.config';
import { _UseRouterReturnsModel } from '@lib/frontend/routing/hooks/useRouter/internal/_useRouter.model';
import { RouterParamsModel } from '@lib/frontend/routing/hooks/useRouter/useRouter.model';

export const _useRouter = (): _UseRouterReturnsModel => {
  const router = useRouter();
  const location = {
    pathname: router.asPath,
    params: {
      ...(router.query || {}),
    },
  };

  const currentLocale = get(router, ['location', 'params', 'locale'], i18nConfig.fallbackLng);

  return {
    location,

    push: <P extends RouterParamsModel>(pathname: string, params?: P) => {
      const locale = params && params.locale;
      const to = router.asPath.replace(currentLocale, locale);
      router.push(to);
    },

    replace: <P extends RouterParamsModel>(pathname: string, params?: P) => {
      const locale = params && params.locale;
      const to = router.asPath.replace(currentLocale, locale);
      router.replace(to);
    },

    back: router.back,
  };
};
