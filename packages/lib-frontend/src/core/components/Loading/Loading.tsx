import { _Loading } from '@lib/frontend/core/components/Loading/internal/_Loading';
import { LoadingProps } from '@lib/frontend/core/components/Loading/Loading.model';
import { LARGE, MEDIUM, SMALL, XLARGE } from '@lib/frontend/core/styles/size.style';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';
import React from 'react';

export const Loading = ({ xlarge, large, small }: LoadingProps) => {
  const size = xlarge ? XLARGE : large ? LARGE : small ? SMALL : MEDIUM;
  const color = useTheme<string>('colors.primary.main');
  return <_Loading size={size} color={color} />;
};
