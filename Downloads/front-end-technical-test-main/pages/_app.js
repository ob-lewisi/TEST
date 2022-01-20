import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Routes from '../routes'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <Routes/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
