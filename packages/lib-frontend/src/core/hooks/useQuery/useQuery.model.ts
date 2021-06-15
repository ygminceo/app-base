export type UseQueryParamsModel<T, E> = [
  key: string,
  query: () => Promise<T>,
  isInitial?: boolean,
];

export interface UseQueryReturnsModel<T, E> {
  isLoading: boolean;
  isError: boolean;
  error?: E | null;
  data?: T;
  query(): any;
}
