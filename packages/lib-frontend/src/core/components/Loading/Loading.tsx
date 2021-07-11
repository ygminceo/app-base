import { _Loading } from '@lib/frontend/core/components/Loading/internal/_Loading';
import { LoadingProps } from '@lib/frontend/core/components/Loading/Loading.model';
import { useStyles } from '@lib/frontend/core/hooks';
import { getColorStyle } from '@lib/frontend/core/styles/color.style';
import {
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
  FONT_SIZE_XLARGE
} from '@lib/frontend/core/styles/size.style';
import React from 'react';

export const Loading = ({ xlarge, large, small, ...props }: LoadingProps) => {
  const {styles} = useStyles(props, [getColorStyle]);
  const size = xlarge
    ? FONT_SIZE_XLARGE
    : large
    ? FONT_SIZE_LARGE
    : small
    ? FONT_SIZE_SMALL
    : FONT_SIZE_MEDIUM;

  return <_Loading style={styles} size={size} />;
};
