import { useState, useEffect } from 'react'
import Script from 'next/script'
import '../normalize.css'
import { ThemeProvider } from 'styled-components'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { lightTheme, darkTheme, GlobalStyles, ThemeButton } from '../styles/global-styles'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  
  const [theme, setTheme] = useState('light') 

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme = (e) => {
    theme === 'light' ? setMode('dark') : setMode('light')
    document.activeElement.blur()
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme)
  }, [])

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      document.activeElement.blur()
    })
  }, [router.events])
  
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
      <Script src="https://cdn.polyfill.io/v2/polyfill.js?features=Element.prototype.classList"></Script>
      <Script src="https://unpkg.com/focus-visible"></Script>
    </ThemeProvider>
  ) 
}
export default MyApp
