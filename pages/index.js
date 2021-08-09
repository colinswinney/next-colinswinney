import Head from 'next/head'
import { GradientText } from '../global-styles'
import PageHeader from '../components/pageHeader/PageHeader'
import Main from '../components/main/Main'
import Guitar from '../components/svg/guitar/Guitar'

const Home = () => {
  return (
    <>
        <Head>
            <title>Colin Swinney</title>
            <meta name="description" content="Freelance Web Developer" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <PageHeader>
            Colin <GradientText>Swinney</GradientText>
        </PageHeader>

        <Guitar />

        <Main>
          Some body text here
        </Main>
    </>
  )
}

export default Home
