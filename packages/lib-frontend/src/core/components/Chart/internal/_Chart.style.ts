import { defaultsDeep } from 'lodash';
import { VictoryTheme, VictoryThemeDefinition } from 'victory';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';

const fontStyle = {
  fontSize: 10,
};

const overrides: VictoryThemeDefinition = {
  chart: {
    colorScale: [CommonTheme.colors.primary.main],
  },
  group: {
    colorScale: [CommonTheme.colors.primary.main],
  },
  axis: {
    style: {
      axisLabel: fontStyle,
      tickLabels: fontStyle,
      grid: {
        fill: 'none',
        stroke: 'none',
        pointerEvents: 'painted',
      },
    },
  },
  legend: {
    style: {
      labels: fontStyle,
    },
  },
};

export const chartTheme: VictoryThemeDefinition = defaultsDeep(overrides, VictoryTheme.material);
