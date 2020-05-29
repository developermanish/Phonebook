import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class JssDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => (
        <App {...props} />
      )
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps
    };
  }

  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#ffffff" />
          <link rel="shortcut icon" href="/imgs/favicon.png" />

          {/* Google fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
