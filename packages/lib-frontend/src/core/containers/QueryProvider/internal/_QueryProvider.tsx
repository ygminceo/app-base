import { _QueryProviderProps } from '@lib/frontend/core/containers/QueryProvider/internal/_QueryProvider.model';
import compose from '@lib/frontend/core/utils/compose/compose';
import { QueryClient, QueryClientProvider, QueryClientProviderProps } from 'react-query';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

export const _QueryProvider = compose<_QueryProviderProps, QueryClientProviderProps>({
  component: QueryClientProvider,
  getProps: ({ children }) => ({ children, client }),
});
