import { useState } from 'react'
import '../normalize.css'
import { ThemeProvider } from 'styled-components'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'
import { lightTheme, darkTheme, GlobalStyles, ThemeButton } from '../global-styles'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light') 

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Nav>
        <ThemeButton onClick={toggleTheme}>{theme == 'light' ? 'D' : 'L'}</ThemeButton>
      </Nav>
      <Component theme={theme == 'light' ? 'light' : 'dark'} {...pageProps} />
      <Footer />
    </ThemeProvider>
  ) 
}
export default MyApp
