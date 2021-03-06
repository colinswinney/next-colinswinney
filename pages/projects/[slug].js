import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { ProjectsNav, ProjectsListAnchor } from "../../styles/projects";
import SlugHeader from "../../components/slugHeader";
import ArticleLayout from "../../components/article-layout";
import Widget from "../../components/widget";
import Main from "../../components/main";
import Globe from "../../components/svg/globe";
import Wrench from "../../components/svg/wrench";
import ImageWrap from "../../components/image-wrap";
import {
	getAllProjectsWithSlug,
	getProject,
	getAllProjects,
} from "../../lib/api";

const Project = ({ projectData, allProjectsData }) => {
	projectData.projectsPostType.techStack.sort();

	const projectsLength = allProjectsData.projects.edges.length;

	const router = useRouter();

	if (!router.isFallback && !projectData?.slug) {
		return <p>Oops! Looks like an error.</p>;
	}

	return (
		<>
			<Head>
				<title>{projectData.title} | Colin Swinney</title>
				<meta name="description" content="Freelance Web Developer" />
			</Head>

			<SlugHeader title={projectData.title}></SlugHeader>

			<Main>
				<ArticleLayout>
					<ArticleLayout.Article>
						<ArticleLayout.Content
							dangerouslySetInnerHTML={{
								__html: projectData.content,
							}}
						/>
						{/* <Link href="/projects" passHref>
                        <AnchorButtonGradient>Back to Projects</AnchorButtonGradient>
                    </Link>                     */}
					</ArticleLayout.Article>

					<ArticleLayout.Aside>
						<Widget gridArea="image">
							<ImageWrap
								imageObj={projectData.projectsPostType.logo}
							/>
						</Widget>

						{projectData.projectsPostType.websiteUrl ? (
							<Widget gridArea="address">
								<Widget.Heading>Address</Widget.Heading>
								<Widget.AddressWrap>
									<Globe />{" "}
									<a
										href={
											projectData.projectsPostType
												.websiteUrl
										}
									>
										{
											projectData.projectsPostType
												.websiteName
										}
									</a>
								</Widget.AddressWrap>
							</Widget>
						) : (
							``
						)}

						{projectData.projectsPostType.summary ? (
							<Widget gridArea="summary">
								<Widget.Heading>Summary</Widget.Heading>
								<Widget.Text>
									{projectData.projectsPostType.summary}
								</Widget.Text>
							</Widget>
						) : (
							``
						)}

						<Widget gridArea="tools">
							<Widget.Heading>Tools</Widget.Heading>
							<Widget.List>
								{projectData.projectsPostType.techStack.map(
									(item) => {
										return (
											<Widget.ListItem key={item}>
												<Wrench /> {item}
											</Widget.ListItem>
										);
									}
								)}
							</Widget.List>
						</Widget>
					</ArticleLayout.Aside>
				</ArticleLayout>

				<ProjectsNav>
					<Link href="/projects" passHref>
						<ProjectsListAnchor>Projects Home</ProjectsListAnchor>
					</Link>
					{allProjectsData.projects.edges.map(
						({ node: single }, i) => {
							return single.slug == projectData.slug ? (
								``
							) : (
								<Link
									key={single.slug}
									href={`/projects/${single.slug}`}
									passHref
								>
									<ProjectsListAnchor>
										{single.title}
									</ProjectsListAnchor>
								</Link>
							);
						}
					)}
				</ProjectsNav>
			</Main>
		</>
	);
};

export async function getStaticPaths() {
	const allProjectsWithSlug = await getAllProjectsWithSlug();

	return {
		paths:
			allProjectsWithSlug.edges.map(
				({ node }) => `/projects/${node.slug}`
			) || [],
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const data = await getProject(params.slug);
	const dataProjects = await getAllProjects();

	return {
		props: {
			projectData: data.project,
			allProjectsData: dataProjects,
		},
	};
}

export default Project;
