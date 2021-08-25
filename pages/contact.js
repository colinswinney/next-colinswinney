import { useEffect } from 'react'
import Head from 'next/head'
import ContactWrap from '../components/contact'
import Main from '../components/main'

const Contact = () => {

  useEffect( () => { 
    document.querySelector("body").className = "";
    document.querySelector("body").classList.add("contact") 
  } );

  return (
    <>
        <Head>
            <title>Colin Swinney</title>
            <meta name="description" content="Freelance Web Developer" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
            
        <Main noPadding>
            {/* <ContactWrap>
              <ContactWrap.HeadingOne>Contact</ContactWrap.HeadingOne>
            </ContactWrap> */}
        </Main>
    </>
  )
}

export default Contact
