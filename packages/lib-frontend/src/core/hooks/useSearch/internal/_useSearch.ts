import Fuse from 'fuse.js';
import { map } from 'lodash';
import { useMemo } from 'react';
import {
  _UseSearchParamsModel,
  _UseSearchReturnsModel,
} from '@lib/frontend/core/hooks/useSearch/internal/_useSearch.model';

export const _useSearch = <T>(
  ...[list, keys, threshold]: _UseSearchParamsModel<T>
): _UseSearchReturnsModel<T> => {
  const search = useMemo(() => new Fuse(list, { keys, threshold }), [list, keys, threshold]);
  return { search: (query: string) => (query ? map(search.search(query), 'item') : list) };
};
