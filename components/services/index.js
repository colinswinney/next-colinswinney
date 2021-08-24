import { Container, FlexContainer } from '../../styles/global-styles'
import { ServicesSection, Heading, CycleText } from './styles/services'
import Card from '../card'


const Services = () => {

    return (
        <ServicesSection>
            <Container>
                <Heading>I love working with</Heading>
                <CycleText></CycleText>
            </Container>
            
            <FlexContainer>
                <Card>
                    <Card.Top>
                        <Card.TopBg bgImg="/images/blob-about.png" />
                    </Card.Top>
                    <Card.Bottom>
                        <Card.Title>Web Development</Card.Title>
                        <Card.Text>Blah Blah</Card.Text>
                    </Card.Bottom>
                </Card>
            </FlexContainer>
                
        </ServicesSection>
    )
}

export default Services