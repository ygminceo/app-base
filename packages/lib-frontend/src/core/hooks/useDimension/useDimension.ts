import { _window } from '@lib/frontend/core/hooks/useDimension/internal/_window';
import {
  DimensionModel,
  UseDimensionReturnsModel,
} from '@lib/frontend/core/hooks/useDimension/useDimension.model';
import { useState } from 'react';

export const useDimension = (): UseDimensionReturnsModel => {
  const [dimension, setDimension] = useState<DimensionModel>(_window.getDimension());
  _window.useLayoutEffect(() => {
    const update = () => setDimension(_window.getDimension());
    _window.subscribeResize(update);
    update();
    return () => _window.unsubscribeResize(update);
  }, []);
  return dimension;
};
