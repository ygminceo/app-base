import { DependencyList, EffectCallback } from 'react';
import { DimensionModel } from '@lib/frontend/core/hooks/useDimension/useDimension.model';

export interface _WindowModel {
  useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
  getDimension(): DimensionModel;
  subscribeResize(cb: () => any): any;
  unsubscribeResize(cb: () => any): any;
}
