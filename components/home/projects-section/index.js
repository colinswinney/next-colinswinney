import Link from 'next/link'
import { ProjectsSectionWrap, FlexBar, Half, Heading, Text, OneColorButton, GridContainerProjects, Cell, ProjectAnchor } from "./styles/projects-section"
import { Container, GradientText, AnchorButton } from '../../../styles/global-styles'

const ProjectsSection = ({ children, projects }) => {
    const projectsArray = Object.values(projects)

    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    
    return (
        <ProjectsSectionWrap>

            <FlexBar>
                <Heading>
                    <GradientText>Web Projects</GradientText>
                </Heading>
            </FlexBar>
            
            <GridContainerProjects>
                {projectsArray.map((project, i) => (
                    
                    <Cell 
                        className={`${i < 4 ? 'tall' : ''} ${alphabet[i].toLowerCase()}`}
                        bgImg={project.featuredImage.node.mediaItemUrl}
                        key={project.title}
                    >
                        <Link href={`/projects/${project.slug}`} passHref>
                            <ProjectAnchor afterTitle={project.title}/>
                        </Link>
                    </Cell>
                        
                ))}
            </GridContainerProjects>

            <FlexBar className="right-align">
                <Link href="/projects" passHref>
                    <AnchorButton>
                        View All
                    </AnchorButton>
                </Link>
            </FlexBar>
            
        </ProjectsSectionWrap>
    )
}

export default ProjectsSection