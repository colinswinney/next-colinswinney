import { useEffect, useContext } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { ThemeContext } from 'styled-components';
import Jumbotron from '../components/jumbotron'
import ImageWrap from '../components/image-wrap'
import Card from '../components/card'
import { GradientText } from '../styles/global-styles'
import { Header, FlexMain } from '../styles/projects'
import { getAllProjects } from '../lib/api'

const Projects = ({ allProjects: { edges }}) => {

    const themeContext = useContext(ThemeContext);

    useEffect( () => { 
        document.querySelector("body").className = "";
        document.querySelector("body").classList.add("projects") 
    } );


  return (
    <>
        <Head>
            <title>Colin Swinney</title>
            <meta name="description" content="Freelance Web Developer" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Jumbotron>
          <Jumbotron.Container>

            <Jumbotron.Left>
              <Jumbotron.Heading>
                <GradientText>Web</GradientText>
                <br/>
                Projects
              </Jumbotron.Heading>
              <Jumbotron.SubHeading>What have I done?!</Jumbotron.SubHeading>
            </Jumbotron.Left>

            <Jumbotron.Right>
                {/* <BlobScreamer />
                <Screamer /> */}
                <ImageWrap transparent>
                    <Image
                        src={themeContext.projectsImg}
                        height={631}
                        width={1016}
                        alt="Man screaming at his computer"
                    />
                </ImageWrap>
            </Jumbotron.Right>

          </Jumbotron.Container>
        </Jumbotron>

        <FlexMain>
            {edges.map( (project, i) => (
                <Link href={`/projects/${project.node.slug}`} key={i}>
                    
                    <a>
                        <Card>
                            <Card.Top>
                                <Card.TopBg bgImg={project.node.featuredImage.node.sourceUrl} />
                            </Card.Top>
                            <Card.Bottom>
                                <Card.Title>{project.node.title}</Card.Title>
                            </Card.Bottom>
                        </Card>
                        {/* <Card project={project}/> */}
                    </a>
                    
                </Link>
                        
            ))}
        </FlexMain>
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