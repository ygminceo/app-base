export type AggregationTypeModel = 'sum' | 'mean' | 'max' | 'min';

export interface AggregationModel {
  key: string;
  type: AggregationTypeModel;
  as?: string;
}

export interface UseAggregationParamsModel<T, R> {
  data?: T[];
  by: string | ((value: any) => string | number);
  key: string;
  aggregations: AggregationModel[];
  transform?(row: R): any;
}

export type UseAggregationReturnsModel<T, R> = (data: T[]) => R[];
