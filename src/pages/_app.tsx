import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import StatesProvider from '../contexts/States/StatesContext'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <StatesProvider>
        <Head>
          <title>Mas Nem Peixe? - A sua loja vejana favorita</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="Mas nem peixe? a sua loja vegana favorita"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </StatesProvider>
    </ThemeProvider>
  )
}

export default App
