import { useCallback, useEffect } from 'react';
import { UseUnmountParamsModel } from '@lib/frontend/core/hooks/useUnmount/useUnmount.model';

export const useUnmount = (...[onUnmount]: UseUnmountParamsModel) => {
  const unmount = useCallback(onUnmount, [onUnmount]);
  useEffect(() => {
    return () => {
      unmount();
    };
  }, []);
};
