import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { Container, AnchorButton } from '../../styles/global-styles'
import { AddressWrap, List, ListItem, Icon } from '../../styles/projects-slug'
import SlugHeader from '../../components/slugHeader'
import ArticleLayout from '../../components/article-layout'
import Widget from '../../components/widget'
import Main from '../../components/main'
import ImageWrap from '../../components/image-wrap'
import { getAllProjectsWithSlug, getProject } from "../../lib/api"

const Project = ( { projectData } ) => {

    useEffect( () => { 
        document.querySelector("body").className = "";
        document.querySelector("body").classList.add(projectData.slug) 
    } );

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
            <link rel="icon" href="/favicon.ico" />
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
                        <AddressWrap>
                            <Icon className="material-icons">language</Icon> <a href={projectData.projectsPostType.websiteUrl}>{projectData.projectsPostType.websiteName}</a>
                        </AddressWrap>
                    </Widget>
                    :
                    ``
                    }
                    
                    
                    <Widget>
                        <Widget.Heading>Tools</Widget.Heading>
                        <List>
                            {projectData.projectsPostType.techStack.map((item, i) => {
                                return (
                                    <ListItem key={item}>
                                        <Icon className="material-icons">build</Icon> {item}
                                    </ListItem>
                                )
                            })}
                        </List>
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