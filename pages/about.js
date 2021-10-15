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
import { getAboutMe } from '../lib/api'


const About = ({aboutData}) => {

  const themeContext = useContext(ThemeContext);

  return (
		<>
			<Head>
				<title>About | Colin Swinney</title>
			</Head>

			<Jumbotron>
				<Jumbotron.Container>
					<Jumbotron.Heading>About Me</Jumbotron.Heading>
					{/* <Jumbotron.SubHeading>I ain&apos;t no cowboy coder.</Jumbotron.SubHeading> */}
					<Jumbotron.SubHeading>
						Sometimes I play dress up with my band.
					</Jumbotron.SubHeading>

					<Jumbotron.RightSide>
						<ImageWrap transparent>
							<Image
								src={themeContext.aboutImg}
								height={500}
								width={500}
								alt="Colin the Cowboy"
							/>
						</ImageWrap>
					</Jumbotron.RightSide>
				</Jumbotron.Container>
			</Jumbotron>

			<Main>
				<ArticleLayout>
					<ArticleLayout.Article>
						<ArticleLayout.Content
							dangerouslySetInnerHTML={{ __html: aboutData.content }}
						/>
					</ArticleLayout.Article>

					<ArticleLayout.Aside>
						<Widget gridArea="image">
							<Logo />
						</Widget>

						<Widget gridArea="address">
							<Widget.Heading>Location</Widget.Heading>
							<Widget.AddressWrap>
								<Widget.Icon className="material-icons">language</Widget.Icon>{" "}
								Milwaukee, WI
							</Widget.AddressWrap>
						</Widget>

						<Widget gridArea="summary">
							<Widget.Heading>Summary</Widget.Heading>
							<Widget.Text>{aboutData.aboutMe.summary}</Widget.Text>
						</Widget>

						{/* <Widget gridArea="tools">
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
                </Widget> */}
					</ArticleLayout.Aside>
				</ArticleLayout>
			</Main>
		</>
	);
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