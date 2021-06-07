import { useCallback, useEffect } from 'react';

export const useUnmount = (onUnmount: () => any) => {
  const unmount = useCallback(onUnmount, [onUnmount]);
  useEffect(() => {
    return () => {
      unmount();
    };
  }, []);
};
