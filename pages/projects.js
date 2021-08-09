import Head from 'next/head'
import PageHeader from '../components/pageHeader/PageHeader'
import Main from '../components/main/Main'
import { GradientText } from '../global-styles'
import { getAllProjects } from '../lib/api'

const Projects = ({ allProjects: { edges }}) => {
  return (
    <>
        <Head>
            <title>Colin Swinney</title>
            <meta name="description" content="Freelance Web Developer" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <PageHeader align="right">
            Web <GradientText>Projects</GradientText>
        </PageHeader>      

        <Main>
            {console.log(edges)}
            {edges.map( (project, i) => (
                <p key={i}><a href={`/projects/${project.node.slug}`}>{project.node.title}</a></p>
            ))}
        </Main>
    </>
  )
}

export default Projects

export async function getStaticProps() {
    const allProjects = await getAllProjects();
    return {
        props: {
            allProjects: allProjects.projects
        }
    };
}