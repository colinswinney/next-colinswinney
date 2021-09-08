import { useEffect, useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { ThemeContext } from 'styled-components';
import Jumbotron from '../components/jumbotron'
import Main from '../components/main'
import ArticleLayout from '../components/article-layout'
import Widget from '../components/widget'
import Logo from '../components/svg/logo'
import ImageWrap from '../components/image-wrap'
import { Container, GradientText } from '../styles/global-styles'
import { getAboutMe } from '../lib/api'
import { ListItem } from '../components/nav/styles/nav'


const About = ({aboutData}) => {

  const themeContext = useContext(ThemeContext);

  return (
    <>
        <Head>
            <title>Colin Swinney</title>
            <meta name="description" content="Freelance Web Developer" />
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
                      height={500}
                      width={500}
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
                    <Logo />
                </Widget>

                <Widget>
                    <Widget.Heading>Location</Widget.Heading>
                    <Widget.AddressWrap>
                        <Widget.Icon className="material-icons">language</Widget.Icon> Milwaukee, WI
                    </Widget.AddressWrap>
                </Widget>

                <Widget>
                    <Widget.Heading>Tools</Widget.Heading>
                    <Widget.List>
                      <Widget.ListItem>
                          <Widget.Icon className="material-icons">build</Widget.Icon> HTML
                      </Widget.ListItem>
                      <Widget.ListItem>
                          <Widget.Icon className="material-icons">build</Widget.Icon> CSS
                      </Widget.ListItem>
                      <Widget.ListItem>
                          <Widget.Icon className="material-icons">build</Widget.Icon> JavaScript
                      </Widget.ListItem>
                      <Widget.ListItem>
                          <Widget.Icon className="material-icons">build</Widget.Icon> React
                      </Widget.ListItem>
                      <Widget.ListItem>
                          <Widget.Icon className="material-icons">build</Widget.Icon> Next.js
                      </Widget.ListItem>
                      <Widget.ListItem>
                          <Widget.Icon className="material-icons">build</Widget.Icon> php
                      </Widget.ListItem>
                      <Widget.ListItem>
                          <Widget.Icon className="material-icons">build</Widget.Icon> WordPress
                      </Widget.ListItem>
                      <Widget.ListItem>
                          <Widget.Icon className="material-icons">build</Widget.Icon> WooCommerce
                      </Widget.ListItem>
                      <Widget.ListItem>
                          <Widget.Icon className="material-icons">build</Widget.Icon> Shopify
                      </Widget.ListItem>
                      <Widget.ListItem>
                          <Widget.Icon className="material-icons">build</Widget.Icon> Adobe
                      </Widget.ListItem>
                      <Widget.ListItem>
                          <Widget.Icon className="material-icons">build</Widget.Icon> Affinity
                      </Widget.ListItem>
                      <Widget.ListItem>
                          <Widget.Icon className="material-icons">build</Widget.Icon> Git
                      </Widget.ListItem>
                    </Widget.List>
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