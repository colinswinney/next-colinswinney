import { useState, useEffect } from 'react'
import '../normalize.css'
import { ThemeProvider } from 'styled-components'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { lightTheme, darkTheme, GlobalStyles, ThemeButton } from '../styles/global-styles'

function MyApp({ Component, pageProps }) {
  
  const [theme, setTheme] = useState('light') 

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme)
  }, []);

  
  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Nav>
        <ThemeButton onClick={toggleTheme}>
          {theme == 'light'
          ? 
          <span className="material-icons light">dark_mode</span>
          : 
          <span className="material-icons dark">wb_sunny</span>
          }
          </ThemeButton>
      </Nav>
      <Component theme={theme == 'light' ? 'light' : 'dark'} {...pageProps} />
      <Footer />
    </ThemeProvider>
  ) 
}
export default MyApp
