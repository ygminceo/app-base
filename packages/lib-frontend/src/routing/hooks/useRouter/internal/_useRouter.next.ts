import { _UseRouterReturns } from '@lib/frontend/routing/hooks/useRouter/internal/_useRouter.model';
import { ParamsType } from '@lib/frontend/routing/hooks/useRouter/useRouter.model';
import { toQuery } from '@lib/frontend/routing/utils/toQuery/toQuery';
import { useRouter } from 'next/router';

export const _useRouter = (): _UseRouterReturns => {
  const router = useRouter();
  const location = {
    pathname: router.pathname,
    params: {
      ...(router.query || {}),
    },
  };

  return {
    location,

    push: <P extends ParamsType>(pathname: string, params?: P) =>
      router.push(`${pathname}${params ? `/${toQuery(params)}` : ''}`),

    replace: <P extends ParamsType>(pathname: string, params?: P) =>
      router.replace(`${pathname}${params ? `/${toQuery(params)}` : ''}`),

    back: router.back,
  };
};
