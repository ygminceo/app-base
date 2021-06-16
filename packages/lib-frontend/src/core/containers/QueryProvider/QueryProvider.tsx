import React from 'react';
import { QueryProviderProps } from '@lib/frontend/core/containers/QueryProvider/QueryProvider.model';
import { _QueryProvider } from '@lib/frontend/core/containers/QueryProvider/internal/_QueryProvider';

export const QueryProvider = ({ children }: QueryProviderProps) => (
  <_QueryProvider>{children}</_QueryProvider>
);
