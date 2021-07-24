import { ChartProps } from '@lib/frontend/core/components/Chart/Chart.model';

export interface _ChartProps extends Pick<ChartProps, 'series' | 'x' | 'y' | 'z'> {}
