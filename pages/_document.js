import Document, { Html, Head, Main, NextScript } from 'next/document'
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
      <Html>
        <Head>
            <link 
              rel="preconnect" 
              href="https://fonts.googleapis.com" 
            />
            <link 
              rel="preconnect" 
              href="https://fonts.gstatic.com" 
              crossOrigin="true" 
            />
            <link 
              rel="preload" 
              as="style"
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&family=Work+Sans:wght@900&display=swap" 
            />
            <link 
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&family=Work+Sans:wght@900&display=swap" 
            />
            <link 
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons" 
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument