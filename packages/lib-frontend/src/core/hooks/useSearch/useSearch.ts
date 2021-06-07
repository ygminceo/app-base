import { _useSearch } from '@lib/frontend/core/hooks/useSearch/internal/_useSearch';
import {
  UseSearchProps,
  UseSearchReturns,
} from '@lib/frontend/core/hooks/useSearch/useSearch.model';

export const useSearch = <T>(...props: UseSearchProps<T>): UseSearchReturns<T> =>
  _useSearch<T>(...props);
