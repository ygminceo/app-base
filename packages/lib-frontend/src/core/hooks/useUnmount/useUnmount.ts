import { UseUnmountParamsModel } from '@lib/frontend/core/hooks/useUnmount/useUnmount.model';
import { useCallback, useEffect } from 'react';

export const useUnmount = (...[onUnmount]: UseUnmountParamsModel) => {
  const unmount = useCallback(onUnmount, [onUnmount]);
  useEffect(() => {
    return () => {
      unmount();
    };
  }, []);
};
