import { isEqual } from 'lodash';
import { useEffect } from 'react';
import { usePrevious } from '@lib/frontend/core/hooks';

export const useChange = <T extends unknown>(value: T, cb: (prev: T) => any): any => {
  const previous = usePrevious<T>(value);
  useEffect(() => {
    !isEqual(value, previous) && cb(previous);
  }, [value, previous, cb]);
};
