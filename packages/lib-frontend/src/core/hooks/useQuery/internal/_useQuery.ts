import { toNumber } from 'lodash';
import { useQuery } from 'react-query';
import {
  _UseQueryParamsModel,
  _UseQueryReturnsModel,
} from '@lib/frontend/core/hooks/useQuery/internal/_useQuery.model';
import { QUERY_EXPIRATION_DEFAULT_MILLISECONDS } from '@lib/frontend/core/hooks/useQuery/useQuery.constants';

export const _useQuery = <T, E>(
  ...[key, query, options]: _UseQueryParamsModel<T, E>
): _UseQueryReturnsModel<T, E> => {
  const cacheTime =
    options && options.cache
      ? options.cache === true
        ? QUERY_EXPIRATION_DEFAULT_MILLISECONDS
        : toNumber(options.cache)
      : undefined;

  const { isFetching, isError, error, data, refetch, isStale } = useQuery<T, E>(key, query, {
    enabled: options?.isInitial || false,
    cacheTime,
    staleTime: cacheTime,
  });

  return {
    isLoading: isFetching,
    isError,
    error,
    data,
    // @ts-ignore
    query: isStale ? refetch : () => Promise.resolve(data),
  };
};
