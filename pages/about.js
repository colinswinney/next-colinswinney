import Head from 'next/head'
import PageHeader from '../components/pageHeader/PageHeader'
import Main from '../components/main/Main'
import { GradientText } from '../global-styles'

const About = () => {
  return (
    <>
        <Head>
            <title>Colin Swinney</title>
            <meta name="description" content="Freelance Web Developer" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <PageHeader align="right">
            <GradientText>About</GradientText> Me
        </PageHeader>      

        <Main>
            about info
        </Main>
    </>
  )
}

export default About
