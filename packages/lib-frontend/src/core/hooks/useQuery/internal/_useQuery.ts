import {
  _UseQueryProps,
  _UseQueryReturns,
} from '@lib/frontend/core/hooks/useQuery/internal/_useQuery.model';
import { useQuery } from 'react-query';

export const _useQuery = <T, E>(
  ...[key, query, isInitial]: _UseQueryProps<T, E>
): _UseQueryReturns<T, E> => {
  const { isLoading, isFetching, isError, error, data, refetch } = useQuery<T, E>(key, query, {
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
