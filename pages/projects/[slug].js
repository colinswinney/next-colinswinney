import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { Container, AnchorButton } from '../../styles/global-styles'
import SlugHeader from '../../components/slugHeader'
import ArticleLayout from '../../components/article-layout'
import Widget from '../../components/widget'
import Main from '../../components/main'
import ImageWrap from '../../components/image-wrap'
import { getAllProjectsWithSlug, getProject } from "../../lib/api"

const Project = ( { projectData } ) => {

    projectData.projectsPostType.techStack.sort()

    const router = useRouter();

    if(!router.isFallback && !projectData?.slug) {
        return <p>Oops! Looks like an error.</p>
    }

    return (
        <>
        <Head>
            <title>Colin Swinney</title>
            <meta name="description" content="Freelance Web Developer" />
        </Head>

        <SlugHeader title={projectData.title} />

        <Main>

            <ArticleLayout>

                <ArticleLayout.Article>
                    <ArticleLayout.Content dangerouslySetInnerHTML={{ __html: projectData.content} } />
                </ArticleLayout.Article>

                <ArticleLayout.Aside>

                    <Widget>
                        <ImageWrap imageObj={projectData.projectsPostType.logo} />
                    </Widget>
                    
                    {projectData.projectsPostType.websiteUrl 
                    ?
                    <Widget>
                        <Widget.Heading>Address</Widget.Heading>
                        <Widget.AddressWrap>
                            <Widget.Icon className="material-icons">language</Widget.Icon> <a href={projectData.projectsPostType.websiteUrl}>{projectData.projectsPostType.websiteName}</a>
                        </Widget.AddressWrap>
                    </Widget>
                    :
                    ``
                    }
                    
                    
                    <Widget>
                        <Widget.Heading>Tools</Widget.Heading>
                        <Widget.List>
                            {projectData.projectsPostType.techStack.map((item, i) => {
                                return (
                                    <Widget.ListItem key={item}>
                                        <Widget.Icon className="material-icons">build</Widget.Icon> {item}
                                    </Widget.ListItem>
                                )
                            })}
                        </Widget.List>
                    </Widget>

                </ArticleLayout.Aside>
            </ArticleLayout>

            <Container>
                <Link href="/projects" passHref>
                    <AnchorButton>Back to Projects</AnchorButton>
                </Link>
            </Container>

        </Main>
        
        </>
    )
}

export async function getStaticPaths() {
    const allProjectsWithSlug = await getAllProjectsWithSlug();

    return {
        paths: allProjectsWithSlug.edges.map(({node}) => `/projects/${node.slug}`) || [],
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const data = await getProject(params.slug);

    return {
        props: {
            projectData: data.project
        }
    }
}

export default Project