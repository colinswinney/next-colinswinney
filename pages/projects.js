import { useContext } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { ThemeContext } from "styled-components";
import Jumbotron from "../components/jumbotron";
import ImageWrap from "../components/image-wrap";
import Main from "../components/main";
import Card from "../components/card";
import { getAllProjects } from "../lib/api";
import { Container } from "../styles/global-styles";

const Projects = ({ allProjects: { edges } }) => {
	const themeContext = useContext(ThemeContext);

	return (
		<>
			<Head>
				<title>Projects | Colin Swinney</title>
			</Head>

			<Jumbotron>
				<Jumbotron.Container>
					<Jumbotron.Heading>Web Projects</Jumbotron.Heading>
					<Jumbotron.SubHeading>
						What have I done?!
					</Jumbotron.SubHeading>

					<Jumbotron.RightSide>
						<ImageWrap transparent>
							<Image
								src={themeContext.projectsImg}
								height={500}
								width={500}
								alt="Man screaming at his computer"
								priority
							/>
						</ImageWrap>
					</Jumbotron.RightSide>
				</Jumbotron.Container>
			</Jumbotron>

			<Main>
				<Container>
					{edges.map((project, i) => (
						<Card
							key={project.node.title}
							className={i % 2 ? "even" : "odd"}
						>
							<Card.ImageDiv
								bgImg={
									project.node.featuredImage.node.sourceUrl
								}
							/>

							<Card.Info>
								<Card.Title>{project.node.title}</Card.Title>
								<Card.Summary>
									{project.node.projectsPostType.summary}
								</Card.Summary>
								<Link
									href={`/projects/${project.node.slug}`}
									passHref
								>
									<a>
										<Card.ReadMore>Read More</Card.ReadMore>
									</a>
								</Link>
								<Card.TechList>
									{project.node.projectsPostType.techStack
										.sort()
										.map((item, i) => (
											<Card.TechListItem key={item}>
												{item}
											</Card.TechListItem>
										))}
								</Card.TechList>
							</Card.Info>
						</Card>
					))}
				</Container>
			</Main>
		</>
	);
};

export default Projects;

export async function getStaticProps() {
	const allProjects = await getAllProjects();
	return {
		props: {
			allProjects: allProjects.projects,
		},
	};
}
