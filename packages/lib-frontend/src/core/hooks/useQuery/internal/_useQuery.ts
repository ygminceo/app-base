import { useQuery } from 'react-query';
import {
  _UseQueryParamsModel,
  _UseQueryReturnsModel,
} from '@lib/frontend/core/hooks/useQuery/internal/_useQuery.model';

export const _useQuery = <T, E>(
  ...[key, query, isInitial]: _UseQueryParamsModel<T, E>
): _UseQueryReturnsModel<T, E> => {
  const { isFetching, isError, error, data, refetch, ...x } = useQuery<T, E>(key, query, {
    enabled: isInitial || false,
  });
  return {
    isLoading: isFetching,
    isError,
    error,
    data,
    query: refetch,
  };
};
