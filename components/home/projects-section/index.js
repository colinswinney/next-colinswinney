import Link from "next/link";
import {
	ProjectsSectionWrap,
	ProjectsSectionInner,
	FlexBar,
	Heading,
	GridContainerProjects,
	Cell,
	ProjectAnchor,
} from "./styles/projects-section";
import {
	Container,
	GradientText,
	AnchorButtonGradient,
} from "../../../styles/global-styles";
import Card from "../../card";

const ProjectsSection = ({ children, projects }) => {
	const projectsArray = Object.values(projects);

	return (
		<ProjectsSectionWrap>
			<ProjectsSectionInner>
				<FlexBar>
					<Heading>
						<GradientText>Web Projects</GradientText>
					</Heading>
				</FlexBar>

				<Container>
					{projectsArray.map((project, i) => (
						<Card
							key={project.title}
							className={i % 2 ? "even" : "odd"}
						>
							<Card.ImageDiv
								bgImg={project.featuredImage.node.sourceUrl}
							/>

							<Card.Info>
								<Card.Title>{project.title}</Card.Title>
								<Card.Summary>
									{project.projectsPostType.summary}
								</Card.Summary>
								<Link
									href={`/projects/${project.slug}`}
									passHref
								>
									<a>
										<Card.ReadMore>Read More</Card.ReadMore>
									</a>
								</Link>
								<Card.TechList>
									{project.projectsPostType.techStack
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

				<FlexBar className="bottom">
					<Link href="/projects" passHref>
						<AnchorButtonGradient>View All</AnchorButtonGradient>
					</Link>
				</FlexBar>
			</ProjectsSectionInner>
		</ProjectsSectionWrap>
	);
};

export default ProjectsSection;
