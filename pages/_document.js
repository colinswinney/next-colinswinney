import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <link href="/fonts/fonts.css" rel="stylesheet"/>
            <link 
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons" 
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <Script src="https://cdn.polyfill.io/v2/polyfill.js?features=Element.prototype.classList"></Script>
        <Script src="https://unpkg.com/focus-visible"></Script>
      </Html>
    )
  }
}

export default MyDocument