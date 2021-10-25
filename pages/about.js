import { useEffect, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { ThemeContext } from "styled-components";
import Jumbotron from "../components/jumbotron";
import Main from "../components/main";
import ArticleLayout from "../components/article-layout";
import Widget from "../components/widget";
import Logo from "../components/svg/logo";
import Globe from "../components/svg/globe";
import ImageWrap from "../components/image-wrap";
import { getAboutMe } from "../lib/api";

const About = ({ aboutData }) => {
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
							dangerouslySetInnerHTML={{
								__html: aboutData.content,
							}}
						/>
					</ArticleLayout.Article>

					<ArticleLayout.Aside>
						<Widget gridArea="image">
							<Logo />
						</Widget>

						<Widget gridArea="address">
							<Widget.Heading>Location</Widget.Heading>
							<Widget.AddressWrap>
								<Globe />
								Milwaukee, WI
							</Widget.AddressWrap>
						</Widget>

						<Widget gridArea="summary">
							<Widget.Heading>Summary</Widget.Heading>
							<Widget.Text>
								{aboutData.aboutMe.summary}
							</Widget.Text>
						</Widget>
					</ArticleLayout.Aside>
				</ArticleLayout>
			</Main>
		</>
	);
};

export default About;

export async function getStaticProps() {
	const aboutData = await getAboutMe();
	return {
		props: {
			aboutData: aboutData.page,
		},
	};
}
