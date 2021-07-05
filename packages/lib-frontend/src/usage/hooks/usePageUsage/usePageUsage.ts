import { useEffect } from 'react';
import { USAGE_OBJECT_PAGE, USAGE_ACTION_OPEN } from '@lib/common/usage/constants';
import { UsageEventPageOpenModel } from '@lib/common/usage/models';
import { useRouter } from '@lib/frontend/routing/hooks';
import { useUsage } from '@lib/frontend/usage/hooks';
import { UsePageUsageParamsModel } from '@lib/frontend/usage/hooks/usePageUsage/usePageUsage.model';

export const usePageUsage = ({ name }: UsePageUsageParamsModel) => {
  const { track, isReady } = useUsage();
  const router = useRouter();

  useEffect(() => {
    track<UsageEventPageOpenModel>({
      object: USAGE_OBJECT_PAGE,
      action: USAGE_ACTION_OPEN,
      params: { name, pathname: router.location.pathname, params: router.location.params },
    });
  }, [isReady]);
};
