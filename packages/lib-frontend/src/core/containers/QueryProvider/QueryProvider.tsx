import { _QueryProvider } from '@lib/frontend/core/containers/QueryProvider/internal/_QueryProvider';
import { QueryProviderProps } from '@lib/frontend/core/containers/QueryProvider/QueryProvider.model';
import React from 'react';

export const QueryProvider = ({ children }: QueryProviderProps) => (
  <_QueryProvider>{children}</_QueryProvider>
);
