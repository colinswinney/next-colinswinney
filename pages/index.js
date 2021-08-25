import { useEffect, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ThemeContext } from 'styled-components';
import { GradientText, AnchorButton } from '../styles/global-styles'
import Jumbotron from '../components/jumbotron'
import Main from '../components/main'
import LogoSection from '../components/logo-section'
import Services from '../components/services'
import Guitar from '../components/svg/guitar'
import Form from '../components/form'
import { getLogos } from '../lib/api'

const Home = ({ logos }) => {

  const themeContext = useContext(ThemeContext);

  useEffect( () => { 
      document.querySelector("body").className = "";
      document.querySelector("body").classList.add("home") 
  } );

  return (
    <>
        <Head>
            <title>Colin Swinney</title>
            <meta name="description" content="Freelance Web Developer" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Jumbotron className="home-jumbotron">
          <Jumbotron.Container>

            <Jumbotron.Left>
              <Jumbotron.Heading>
                <GradientText>Colin</GradientText>
                <br/>
                Swinney
              </Jumbotron.Heading>
              <Jumbotron.SubHeading>I&apos;m a web developer from Milwaukee, WI.  Let&apos;s make some music.</Jumbotron.SubHeading>
              <Link href="/projects">
                <AnchorButton>
                  See My Work
                </AnchorButton>
              </Link>
            </Jumbotron.Left>

            <Jumbotron.Right className="home-right">
              <Guitar />
            </Jumbotron.Right>

          </Jumbotron.Container>
        </Jumbotron>

        

        <Main>

          <Services>
          </Services>
          
          <h2><GradientText>About</GradientText></h2>
          <p>text</p>

          <h2><GradientText>Projects</GradientText></h2>
          <p>text</p>

          <h2><GradientText>Contact</GradientText></h2>
          <p>text</p>

          <LogoSection logos={logos}/>
          <Form />
        </Main>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const logos = await getLogos();
  return {
      props: {
          logos: logos
      }
  };
}