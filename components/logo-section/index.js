import { FlexContainer } from '../../styles/global-styles'
import { Section, TextWrap } from './styles/logo-section'
import ImageWrap from '../image-wrap'

const LogoSection = ({ children, logos }) => {

    console.log(logos)
    return (
        <Section>
            <FlexContainer>
                <TextWrap>
                    <h2>Clients</h2>
                    <p>It&apos;s been my pleasure to work with the following Wisconsin area companies.</p>
                </TextWrap>
                
                <ImageWrap className="linnemans" imageObj={logos.logoLRI} transparent grayscale/>
                <ImageWrap className="a3" imageObj={logos.logoA3} transparent grayscale/>
                <ImageWrap className="tippecanoe" imageObj={logos.logoTH} transparent grayscale/>
                <ImageWrap className="bbms" imageObj={logos.logoBBMS} transparent grayscale/>
                <ImageWrap className="dusty" imageObj={logos.logoDMR} transparent grayscale/>
                <ImageWrap className="ci" imageObj={logos.logoCI} transparent grayscale/>
                
            </FlexContainer>
        </Section>
    )
}

export default LogoSection