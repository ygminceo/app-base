import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { AppRegistry } from 'react-native';
import { ServerStyleSheet } from 'styled-components';
import i18nConfig from '@lib/frontend/locale/i18n/i18n.config';

export default class DocumentPage extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    AppRegistry.registerComponent('App', () => Main);

    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication('App');
    const sheet = new ServerStyleSheet();
    const { renderPage } = ctx;
    try {
      ctx.renderPage = () =>
        renderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            {getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang={i18nConfig.fallbackLng}>
        <Head />
        <body>
          <Main />
          <NextScript />
          <style>{`
            #__next {
              height: 100%;
              display: flex;
              flex-direction: column;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}
