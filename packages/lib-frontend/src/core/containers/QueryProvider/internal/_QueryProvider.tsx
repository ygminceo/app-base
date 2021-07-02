import { QueryClient, QueryClientProvider, QueryClientProviderProps } from 'react-query';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
import { _QueryProviderProps } from '@lib/frontend/core/containers/QueryProvider/internal/_QueryProvider.model';
import { _getPersistor } from '@lib/frontend/core/containers/QueryProvider/internal/_getPersistor';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';
import compose from '@lib/frontend/core/utils/compose/compose';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

if (!Platform.isServer) {
  persistQueryClient({ queryClient, persistor: _getPersistor() });
}

export const _QueryProvider = compose<_QueryProviderProps, QueryClientProviderProps>({
  component: QueryClientProvider,
  getProps: ({ children }) => ({ children, client: queryClient }),
});
