import { _useQuery } from '@lib/frontend/core/hooks/useQuery/internal/_useQuery';
import {
  UseQueryParamsModel,
  UseQueryReturnsModel,
} from '@lib/frontend/core/hooks/useQuery/useQuery.model';

export const useQuery = <T, E = Error>(
  ...props: UseQueryParamsModel<T, E>
): UseQueryReturnsModel<T, E> => _useQuery(...props);
