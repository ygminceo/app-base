import { _useQuery } from '@lib/frontend/core/hooks/useQuery/internal/_useQuery';
import {
  UseQueryProps,
  UseQueryReturns,
} from '@lib/frontend/core/hooks/useQuery/useQuery.model';

export const useQuery = <T, E>(...props: UseQueryProps<T, E>): UseQueryReturns<T, E> =>
  _useQuery(...props);
