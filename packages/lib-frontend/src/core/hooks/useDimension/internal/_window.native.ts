import { _WindowModel } from '@lib/frontend/core/hooks/useDimension/internal/_window.model';
import { useLayoutEffect } from 'react';
import { Dimensions } from 'react-native';

export const _window: _WindowModel = {
  useLayoutEffect: useLayoutEffect,
  getDimension() {
    return {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    };
  },
  subscribeResize(cb: () => any) {
    Dimensions.addEventListener('change', cb);
  },
  unsubscribeResize(cb: () => any) {
    Dimensions.removeEventListener('change', cb);
  },
};
