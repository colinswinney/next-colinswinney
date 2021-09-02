import { useEffect, useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { ThemeContext } from 'styled-components';
import Jumbotron from '../components/jumbotron'
import Main from '../components/main'
import ArticleLayout from '../components/article-layout'
import Widget from '../components/widget'
import ImageWrap from '../components/image-wrap'
import { Container, GradientText } from '../styles/global-styles'
import { getAboutMe } from '../lib/api'

const About = ({aboutData}) => {

  const themeContext = useContext(ThemeContext);

  return (
    <>
        <Head>
            <title>Colin Swinney</title>
            <meta name="description" content="Freelance Web Developer" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Jumbotron>
          <Jumbotron.Container>

              <Jumbotron.Heading>
                <GradientText>About</GradientText> Me
              </Jumbotron.Heading>
              {/* <Jumbotron.SubHeading>I ain&apos;t no cowboy coder.</Jumbotron.SubHeading> */}
              <Jumbotron.SubHeading>Sometimes I play dress up with my band.</Jumbotron.SubHeading>

              <ImageWrap transparent>
                  <Image
                      src={themeContext.aboutImg}
                      height={600}
                      width={600}
                      alt="Colin the Cowboy"
                  />
              </ImageWrap>

          </Jumbotron.Container>
        </Jumbotron>

        <Main>

          <ArticleLayout>

            <ArticleLayout.Article>
                <ArticleLayout.Content dangerouslySetInnerHTML={{ __html: aboutData.content} } />
            </ArticleLayout.Article>

            <ArticleLayout.Aside>

                <Widget>
                    <Widget.Heading>Skillz</Widget.Heading>
                </Widget>
                
                

            </ArticleLayout.Aside>

          </ArticleLayout>

        </Main>
    </>
  )
}

export default About

export async function getStaticProps() {
  const aboutData = await getAboutMe();
  return {
      props: {
        aboutData: aboutData.page
      }
  };
}