import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { AuthenticationProvider } from '@lib/frontend/authentication/containers';
import { QueryProvider } from '@lib/frontend/core/containers';
import { LocaleProvider } from '@lib/frontend/locale/containers';
import { RootProps } from '@lib/frontend/root/containers/Root/Root.model';
import { store } from '@lib/frontend/root/stores/store';
import { ThemeProvider } from '@lib/frontend/theme/containers';
import { UsageProvider } from '@lib/frontend/usage/containers';

export const Root = ({ children }: RootProps) => (
  <Provider store={store}>
    <QueryProvider>
      <ThemeProvider>
        <LocaleProvider>
          <AuthenticationProvider>
            <UsageProvider>
              <PaperProvider>{children}</PaperProvider>
            </UsageProvider>
          </AuthenticationProvider>
        </LocaleProvider>
      </ThemeProvider>
    </QueryProvider>
  </Provider>
);
