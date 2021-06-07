import { Dimension } from '@lib/frontend/core/hooks/useDimension/useDimension.model';
import { DependencyList, EffectCallback } from 'react';

export interface _WindowClass {
  useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
  getDimension(): Dimension;
  subscribeResize(cb: () => any): any;
  unsubscribeResize(cb: () => any): any;
}
