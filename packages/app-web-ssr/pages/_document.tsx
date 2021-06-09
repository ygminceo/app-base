import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { AppRegistry } from 'react-native';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

export default class DocumentPage extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    AppRegistry.registerComponent('App', () => Main);

    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication('App');
    const sheet = new ServerStyleSheet();
    const renderPage = ctx.renderPage;
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
      <Html>
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
