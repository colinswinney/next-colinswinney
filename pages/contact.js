import Head from 'next/head'
import PageHeader from '../components/pageHeader/PageHeader'
import Main from '../components/main/Main'
import { GradientText } from '../global-styles'

const Contact = () => {
  return (
    <>
        <Head>
            <title>Colin Swinney</title>
            <meta name="description" content="Freelance Web Developer" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <PageHeader align="right">
            <GradientText>Contact</GradientText> Me
        </PageHeader>      

        <Main>
            contact info
        </Main>
    </>
  )
}

export default Contact
