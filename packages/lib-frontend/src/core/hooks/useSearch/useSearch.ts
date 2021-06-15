import { _useSearch } from '@lib/frontend/core/hooks/useSearch/internal/_useSearch';
import {
  UseSearchParamsModel,
  UseSearchReturnsModel,
} from '@lib/frontend/core/hooks/useSearch/useSearch.model';

export const useSearch = <T>(...props: UseSearchParamsModel<T>): UseSearchReturnsModel<T> =>
  _useSearch<T>(...props);
