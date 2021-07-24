import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useState } from 'react';
import { ChartAxisModel, ChartSeriesModel } from '@lib/frontend/core/components/Chart/Chart.model';
import { _ChartProps } from '@lib/frontend/core/components/Chart/internal/_Chart.model';
import moment from 'moment';
import { map } from 'lodash';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

const getChart = (s: ChartSeriesModel, x?: ChartAxisModel, y?: ChartAxisModel) => {};

export const _Chart = ({ series, x, y, ...props }: _ChartProps) => {
  const [isZoomed, setIsZoomed] = useState<boolean>();

  const backgroundMain = useTheme<string>('colors.background.main');

  const options: Options = {
    title: {
      text: '',
    },
    tooltip: {
      shared: true,
    },
    chart: {
      backgroundColor: backgroundMain,
    },
    xAxis: {
      type: x && x.type || 'linear',
      labels: {
        formatter: function() {
          return moment(this.value).format('MMM D');
        } 
      },
    },
    yAxis: {
      type: y && y.type || 'linear',
    },
    series: series.map((s) => ({
      ...s,
    })),
    credits: { enabled: false },
  };

  // console.warn(options);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

// import { get } from 'lodash';
// import moment from 'moment';
// import React, { ReactNode, useState } from 'react';
// import {
//   createContainer,
//   VictoryAxis,
//   VictoryBar,
//   VictoryChart,
//   VictoryGroup,
//   VictoryLegend,
//   VictoryLine,
//   VictoryTooltip,
//   VictoryZoomContainerProps,
// } from 'victory';
// import { ChartAxisModel, ChartSeriesModel } from '@lib/frontend/core/components/Chart/Chart.model';
// import { _ChartProps } from '@lib/frontend/core/components/Chart/internal/_Chart.model';
// import { chartTheme } from '@lib/frontend/core/components/Chart/internal/_Chart.style';
// import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

// const VictoryContainer = createContainer('zoom', 'voronoi');

// const getChart = (s: ChartSeriesModel, x?: ChartAxisModel, y?: ChartAxisModel) => {
//   const chartProps = {
//     key: s.title,
//     x: (x && x.key) || undefined,
//     y: (y && y.key) || undefined,
//   };
//   switch (s.type) {
//     case 'bar':
//       return (
//         <VictoryBar
//           {...chartProps}
//           style={s.color ? { data: { fill: s.color } } : undefined}
//           data={s.data}
//         />
//       );
//     case 'line':
//       return (
//         <VictoryLine
//           {...chartProps}
//           style={s.color ? { data: { stroke: s.color } } : undefined}
//           data={s.data}
//         />
//       );
//     default:
//       return null;
//   }
// };

// export const _Chart = ({ series, x, y, ...props }: _ChartProps) => {
//   const [isZoomed, setIsZoomed] = useState<boolean>();
//   const duration = useTheme<number>('animation.transition');

//   const backgroundMain = useTheme<string>('colors.background.main');

//   const handleZoom = (_: any, props: VictoryZoomContainerProps) => {
//     setIsZoomed(get(props, 'zoomActive', false));
//   };

//   const charts = series.reduce<ReactNode[]>(
//     (result, s) => (s.data ? [...result, getChart(s, x, y)] : result),
//     [],
//   );

//   return (
//     <VictoryChart
//       // padding={{ top: 25, bottom: 50, right: 25, left: 25 }}
//       // domainPadding={{ x: 25, y: 25 }}
//       animate={{ duration, easing: 'poly' }}
//       theme={chartTheme}
//       scale={{
//         x: (x && x.type) || undefined,
//         y: (y && y.type) || undefined,
//       }}
//       containerComponent={
//         // <VictoryZoomContainer responsive allowPan onZoomDomainChange={handleZoom} />
//         <VictoryContainer />
//       }>
//       {/* {charts.length > 0 && <VictoryGroup offset={15}>{charts}</VictoryGroup>} */}

//       {charts.length > 0 && (
//         <VictoryGroup
//           offset={15}
//           labels={({ datum }) => datum[(y && y.key) || 'y'] || undefined}
//           labelComponent={
//             <VictoryTooltip
//               cornerRadius={0}
//               pointerLength={0}
//               flyoutStyle={{
//                 fill: backgroundMain,
//               }}
//             />
//           }>
//           {charts}
//         </VictoryGroup>
//       )}

//       <VictoryAxis
//         crossAxis
//         tickFormat={(x) => {
//           return moment(x).format('MMM D');
//         }}
//       />

//       <VictoryAxis dependentAxis />

//       <VictoryLegend
//         centerTitle
//         orientation="horizontal"
//         // style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
//         data={series.map((s) => ({ name: s.title, symbol: {} }))}
//       />
//     </VictoryChart>
//   );
// };
