export type UseSearchParamsModel<T> = [list: T[], keys: string[], threshold?: number];

export interface UseSearchReturnsModel<T> {
  search(query: string): T[];
}
