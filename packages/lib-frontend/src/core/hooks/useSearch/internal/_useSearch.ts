import {
  _UseSearchProps,
  _UseSearchReturns,
} from '@lib/frontend/core/hooks/useSearch/internal/_useSearch.model';
import Fuse from 'fuse.js';
import { map } from 'lodash';
import { useMemo } from 'react';

export const _useSearch = <T>(
  ...[list, keys, threshold]: _UseSearchProps<T>
): _UseSearchReturns<T> => {
  const search = useMemo(() => new Fuse(list, { keys, threshold }), [list, keys, threshold]);
  return { search: (query: string) => (query ? map(search.search(query), 'item') : list) };
};
