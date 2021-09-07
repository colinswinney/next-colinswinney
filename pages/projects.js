import { useEffect, useContext } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { ThemeContext } from 'styled-components';
import Jumbotron from '../components/jumbotron'
import ImageWrap from '../components/image-wrap'
import Main from '../components/main'
import Card from '../components/card'
import { GradientText } from '../styles/global-styles'
import { FlexContainerProjects, Anchor } from '../styles/projects'
import { getAllProjects } from '../lib/api'

const Projects = ({ allProjects: { edges }}) => {

    const themeContext = useContext(ThemeContext);

    return (
    <>
        <Head>
            <title>Colin Swinney</title>
            <meta name="description" content="Freelance Web Developer" />
        </Head>

        <Jumbotron>
          <Jumbotron.Container>

              <Jumbotron.Heading>
                <GradientText>Web</GradientText> Projects
              </Jumbotron.Heading>
              <Jumbotron.SubHeading>What have I done?!</Jumbotron.SubHeading>

            <ImageWrap transparent>
                <Image
                    src={themeContext.projectsImg}
                    height={600}
                    width={600}
                    alt="Man screaming at his computer"
                />
            </ImageWrap>

          </Jumbotron.Container>
        </Jumbotron>

        <Main>
            <FlexContainerProjects>
            {edges.map( (project, i) => (
                <Link href={`/projects/${project.node.slug}`} key={project.node.title} passHref>
                    
                    <Anchor>
                        <Card>
                            <Card.Top>
                                <Card.TopBg bgImg={project.node.featuredImage.node.sourceUrl} />
                            </Card.Top>
                            <Card.Bottom>
                                <Card.Title>{project.node.title}</Card.Title>
                            </Card.Bottom>
                        </Card>
                    </Anchor>
                    
                </Link>
                        
            ))}
            </FlexContainerProjects>
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