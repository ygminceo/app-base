import { Root } from '@lib/frontend/root/containers';
import { GlobalStyle } from '@lib/frontend/web/Global.style';
import { NextPage } from 'next';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import React from 'react';

const AppPage: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Root>
    <GlobalStyle />
    <Component {...pageProps} />
  </Root>
);

export default appWithTranslation(AppPage);
