import { _WindowModel } from '@lib/frontend/core/hooks/useDimension/internal/_window.model';
import { useEffect, useLayoutEffect } from 'react';

const IS_SSR = typeof window === 'undefined';

export const _window: _WindowModel = {
  useLayoutEffect: IS_SSR ? useEffect : useLayoutEffect,
  getDimension() {
    return IS_SSR
      ? {}
      : {
          width: window.innerWidth,
          height: window.innerHeight,
        };
  },
  subscribeResize(cb: () => any) {
    IS_SSR ? null : window.addEventListener('resize', cb);
  },
  unsubscribeResize(cb: () => any) {
    IS_SSR ? null : window.removeEventListener('resize', cb);
  },
};
