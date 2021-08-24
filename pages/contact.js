import { useEffect } from 'react'
import Head from 'next/head'
import ContactForm from '../components/form'
import { MainPadded, Heading } from '../styles/contact'

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
            
        <MainPadded>
            <Heading>Contact Me</Heading>
            <ContactForm />
        </MainPadded>
    </>
  )
}

export default Contact
