export type ChartSeriesTypeModel = 'column' | 'line';

export interface ChartAxisModel {
  key?: string;
  type?: 'datetime';
}

export interface ChartSeriesModel<T = object> {
  name: string;
  data: T[];
  type: ChartSeriesTypeModel;
  color?: string;
}

export interface ChartProps {
  title?: string;
  series: ChartSeriesModel[];
  x?: ChartAxisModel;
  y?: ChartAxisModel;
  z?: ChartAxisModel;
}
