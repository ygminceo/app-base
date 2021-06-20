import { get } from 'lodash';
import React, { useState } from 'react';
import { VictoryZoomContainerProps } from 'victory';
import { VictoryBar, VictoryChart, VictoryZoomContainer } from 'victory-native';
import { _ChartProps } from '@lib/frontend/core/components/Chart/internal/_Chart.model';
import { chartTheme } from '@lib/frontend/core/components/Chart/internal/_Chart.style';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';

export const _Chart = ({ data, ...props }: _ChartProps) => {
  const [isZoomed, setIsZoomed] = useState<boolean>();
  const duration = useTheme<number>('animation.transition');

  const handleZoom = (_: any, props: VictoryZoomContainerProps) => {
    setIsZoomed(get(props, 'zoomActive', false));
  };

  return (
    <VictoryChart
      padding={{ top: 10, bottom: 35, left: 10, right: 0 }}
      animate={{ duration, easing: 'poly' }}
      domainPadding={{ x: 10, y: 10 }}
      theme={chartTheme}
      containerComponent={
        <VictoryZoomContainer responsive allowPan onZoomDomainChange={handleZoom} />
      }>
      <VictoryBar data={data} style={{ data: { fill: CommonTheme.colors.primary.main } }} />
    </VictoryChart>
  );
};
