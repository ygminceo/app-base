import { chain, maxBy, meanBy, minBy, reduce, sumBy } from 'lodash';
import { ObjectModel } from '@lib/common/core/models';
import {
  AggregationModel,
  AggregationTypeModel,
  UseAggregationParamsModel,
  UseAggregationReturnsModel,
} from '@lib/frontend/core/hooks/useAggregation/useAggregation.model';

const getAggregate = (aggregate: AggregationTypeModel) => {
  switch (aggregate) {
    case 'sum': {
      return sumBy;
    }
    case 'mean': {
      return meanBy;
    }
    case 'max': {
      return maxBy;
    }
    case 'min': {
      return minBy;
    }
    default: {
      return maxBy;
    }
  }
};

export const useAggregation = <T = ObjectModel, R = ObjectModel>({
  by,
  key,
  aggregations,
  transform,
}: UseAggregationParamsModel<T, R>): UseAggregationReturnsModel<T, R> => (data) =>
  chain(data)
    .groupBy(by)
    .map((v, k) => {
      let row = reduce<AggregationModel[], { [key in keyof R]: any }>(
        aggregations,
        (result, aggregation) => {
          const aggregated = getAggregate((aggregation as AggregationModel).type)(
            v,
            (aggregation as AggregationModel).key,
          );
          return {
            ...result,
            [(aggregation as AggregationModel).as ||
            (aggregation as AggregationModel).key]: aggregated,
          };
        },
        { [key]: k } as { [key in keyof R]: any },
      );
      if (transform) {
        row = transform(row);
      }
      return row;
    })
    .value();
