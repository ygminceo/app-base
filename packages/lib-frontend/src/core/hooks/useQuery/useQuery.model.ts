export interface UseQueryOptionsModel {
  isInitial?: boolean;
  cache?: number | boolean;
}

export type UseQueryParamsModel<T, E> = [
  key: string,
  query: () => Promise<T>,
  options?: UseQueryOptionsModel,
];

export interface UseQueryReturnsModel<T, E> {
  isLoading: boolean;
  isError: boolean;
  error?: E | null;
  data?: T;
  query(): Promise<T>;
}
