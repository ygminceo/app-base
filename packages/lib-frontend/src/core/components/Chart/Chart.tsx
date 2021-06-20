import React from 'react';
import { Text, Wrapper } from '@lib/frontend/core/components';
import { ChartProps } from '@lib/frontend/core/components/Chart/Chart.model';
import { _Chart } from '@lib/frontend/core/components/Chart/internal/_Chart';
import { useStyles } from '@lib/frontend/core/hooks';

export const Chart = ({ data, ...props }: ChartProps) => {
  const { styles } = useStyles(props);
  return (
    <Wrapper style={styles} border round width={500} height={500}>
      <Text p title>Chart Title</Text>
      <Wrapper grow shrink>
        <_Chart data={data} />
      </Wrapper>
    </Wrapper>
  );
};
