import {
  UseUncontrolledProps,
  UseUncontrolledReturns,
} from '@lib/frontend/core/hooks/useUncontrolled/useUncontrolled.model';
import { useState } from 'react';

export const useUncontrolled = <T>(
  ...[value, onChange, defaultValue]: UseUncontrolledProps<T>
): UseUncontrolledReturns<T> => {
  const [valueState, setValueState] = useState<T>(defaultValue);
  return [
    value === undefined ? valueState : value,
    onChange === undefined ? setValueState : onChange,
  ];
};
