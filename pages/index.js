import { useEffect, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeContext } from 'styled-components';
import { GradientText, AnchorButton } from '../styles/global-styles'
import Jumbotron from '../components/jumbotron'
import ImageWrap from '../components/image-wrap'
import Main from '../components/main'
import LogoSection from '../components/logo-section'
import Services from '../components/services'
import Guitar from '../components/svg/guitar'
import Blob from '../components/svg/blob'
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

        <Jumbotron>
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

            <Jumbotron.Right>
              <Guitar />
              <ImageWrap transparent>
                  <Image
                      src={themeContext.homeImg}
                      height={800}
                      width={800}
                      alt="Just a blob shape"
                  />
              </ImageWrap>
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