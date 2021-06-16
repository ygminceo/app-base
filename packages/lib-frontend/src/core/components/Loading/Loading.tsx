import React from 'react';
import { LoadingProps } from '@lib/frontend/core/components/Loading/Loading.model';
import { _Loading } from '@lib/frontend/core/components/Loading/internal/_Loading';
import {
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
  FONT_SIZE_XLARGE,
} from '@lib/frontend/core/styles/size.style';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

export const Loading = ({ xlarge, large, small }: LoadingProps) => {
  const size = xlarge
    ? FONT_SIZE_XLARGE
    : large
    ? FONT_SIZE_LARGE
    : small
    ? FONT_SIZE_SMALL
    : FONT_SIZE_MEDIUM;
  const color = useTheme<string>('colors.primary.main');
  return <_Loading size={size} color={color} />;
};
