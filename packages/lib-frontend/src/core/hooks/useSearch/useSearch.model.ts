export type UseSearchProps<T> = [list: T[], keys: string[], threshold?: number];

export interface UseSearchReturns<T> {
  search(query: string): T[];
}
