import { useRouter } from "next/router"
import Head from "next/head"

import { getAllProjectsWithSlug, getProject } from "../../lib/api"

const Project = ( { projectData } ) => {

    console.log(projectData)

    const router = useRouter();

    if(!router.isFallback && !projectData?.slug) {
        return <p>Oops! Looks like an error.</p>
    }

    return (
        <div>
            {projectData.title}
        </div>
    )
}

export async function getStaticPaths() {
    const allProjectsWithSlug = await getAllProjectsWithSlug();

    return {
        paths: allProjectsWithSlug.edges.map(({node}) => `/projects/${node.slug}`) || [],
        fallback: true
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