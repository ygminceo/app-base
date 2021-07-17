import { NextPage } from 'next';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import 'normalize.css';
import React from 'react';
import { Root } from '@lib/frontend/root/containers';
import { GlobalStyle } from '@lib/frontend/web/Global.style';

const AppPage: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Root>
    <GlobalStyle />
    <Component {...pageProps} />
  </Root>
);

export default appWithTranslation(AppPage);
