export type UseQueryProps<T, E> = [key: string, query: () => Promise<T>, isInitial?: boolean];

export interface UseQueryReturns<T, E> {
  isLoading: boolean;
  isError: boolean;
  error?: E | null;
  data?: T;
  query(): any;
}
