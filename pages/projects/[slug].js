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
            <title>{projectData.title} | Colin Swinney</title>
            <meta name="description" content="Freelance Web Developer" />
        </Head>

        <SlugHeader title={projectData.title}>
            
        </SlugHeader>

        <Main>

            <ArticleLayout>

                <ArticleLayout.Article>
                    <ArticleLayout.Content dangerouslySetInnerHTML={{ __html: projectData.content} } />
                    <Link href="/projects" passHref>
                        <AnchorButton>Back to Projects</AnchorButton>
                    </Link>
                </ArticleLayout.Article>

                <ArticleLayout.Aside>

                    <Widget gridArea="image">
                        <ImageWrap imageObj={projectData.projectsPostType.logo} />
                    </Widget>
                    
                    {projectData.projectsPostType.websiteUrl 
                    ?
                    <Widget gridArea="address">
                        <Widget.Heading>Address</Widget.Heading>
                        <Widget.AddressWrap>
                            <Widget.Icon className="material-icons">language</Widget.Icon> <a href={projectData.projectsPostType.websiteUrl}>{projectData.projectsPostType.websiteName}</a>
                        </Widget.AddressWrap>
                    </Widget>
                    :
                    ``
                    }

                    {projectData.projectsPostType.summary 
                    ?
                    <Widget gridArea="summary">
                        <Widget.Heading>Summary</Widget.Heading>
                        <Widget.Text>
                        {projectData.projectsPostType.summary}
                        </Widget.Text>
                    </Widget>
                    :
                    ``
                    }
                    
                    <Widget gridArea="tools">
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