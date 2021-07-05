import { useRouter } from 'next/router';
import { _UseRouterReturnsModel } from '@lib/frontend/routing/hooks/useRouter/internal/_useRouter.model';
import { RouterParamsModel } from '@lib/frontend/routing/hooks/useRouter/useRouter.model';
import { toQuery } from '@lib/frontend/routing/utils/toQuery/toQuery';

export const _useRouter = (): _UseRouterReturnsModel => {
  const router = useRouter();
  const location = {
    pathname: router.asPath,
    params: {
      ...(router.query || {}),
    },
  };

  return {
    location,

    push: <P extends RouterParamsModel>(pathname: string, params?: P) =>
      router.push(`${pathname}${params ? `/${toQuery(params)}` : ''}`),

    replace: <P extends RouterParamsModel>(pathname: string, params?: P) =>
      router.replace(`${pathname}${params ? `/${toQuery(params)}` : ''}`),

    back: router.back,
  };
};
