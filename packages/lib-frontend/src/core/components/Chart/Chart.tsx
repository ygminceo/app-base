import React from 'react';
import { Text, Wrapper } from '@lib/frontend/core/components';
import { ChartProps } from '@lib/frontend/core/components/Chart/Chart.model';
import { _Chart } from '@lib/frontend/core/components/Chart/internal/_Chart';
import { useStyles } from '@lib/frontend/core/hooks';

export const Chart = ({ title, series, x, y, ...props }: ChartProps) => {
  const { styles } = useStyles(props);
  return (
    <Wrapper style={styles} border round width={500} height={500}>
      {title && (
        <Text p title center>
          {title}
        </Text>
      )}
      <Wrapper grow shrink>
        <_Chart series={series} x={x} y={y} />
      </Wrapper>
    </Wrapper>
  );
};
