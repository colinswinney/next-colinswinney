import { Container, FlexContainer, GradientText } from '../../styles/global-styles'
import { useEffect } from 'react'
import { ServicesSection, Heading, LoopTextWrap } from './styles/services'
import Card from '../card'

const Services = () => {

    useEffect(() => {
        let texts = document.querySelectorAll(".cycle-text");
        let prev = null;
        let animate = (curr, currIndex) => {
            let index = (currIndex + 1) % texts.length;
            if (prev) {
                prev.className = "cycle-text";
            }
            curr.className = "cycle-text show";
            prev = curr;
            
            setTimeout(() => {
                animate(texts[index], index);
            }, 2500);
        };

        animate(texts[0], 0);
    }, [])
    

    return (
        <ServicesSection>
            <Container>
                <Heading>I <strong><GradientText>love</GradientText></strong> working with</Heading>
                {/* <CycleText id="cycle"></CycleText> */}
                <LoopTextWrap className="loop-text">
                    <h2 className="cycle-text"><GradientText>HTML/CSS</GradientText></h2>
                    <h2 className="cycle-text"><GradientText>JavaScript</GradientText></h2>
                    <h2 className="cycle-text"><GradientText>React</GradientText></h2>
                    <h2 className="cycle-text"><GradientText>Next.js</GradientText></h2>
                    <h2 className="cycle-text"><GradientText>php</GradientText></h2>
                    <h2 className="cycle-text"><GradientText>WordPress</GradientText></h2>
                    <h2 className="cycle-text"><GradientText>WooCommerce</GradientText></h2>
                    <h2 className="cycle-text"><GradientText>Shopify</GradientText></h2>
                    <h2 className="cycle-text"><GradientText>Adobe CC</GradientText></h2>
                    <h2 className="cycle-text"><GradientText>Git</GradientText></h2>
                </LoopTextWrap>
                
                {/* <CycleText className="cycle-text">HTML/CSS</CycleText>
                <CycleText className="cycle-text">JavaScript</CycleText>
                <CycleText className="cycle-text">React</CycleText>
                <CycleText className="cycle-text">Next.js</CycleText>
                <CycleText className="cycle-text">php</CycleText>
                <CycleText className="cycle-text">WordPress</CycleText>
                <CycleText className="cycle-text">WooCommerce</CycleText>
                <CycleText className="cycle-text">Shopify</CycleText>
                <CycleText className="cycle-text">Adobe CC</CycleText>
                <CycleText className="cycle-text">Git</CycleText> */}

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