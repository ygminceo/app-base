import { Flow } from 'react-native-animated-spinkit';
import { _LoadingProps } from '@lib/frontend/core/components/Loading/internal/_Loading.model';
import compose from '@lib/frontend/core/utils/compose/compose';

export const _Loading = compose<_LoadingProps, any>({
  component: Flow,
  getProps: ({ size, color }) => ({ size, color }),
});
