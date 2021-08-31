import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Image from 'next/image'
import { FlexContainer, GradientText } from '../../../styles/global-styles'
import { ContactSectionWrap, LeftWrap, HeadingTwo } from './styles/contact-section'
import ImageWrap from '../../image-wrap'
import Form from '../../form'

export default function ContactSection({ children, ...restProps }) {

    const themeContext = useContext(ThemeContext);

    return (
        <ContactSectionWrap>
            <FlexContainer>
                <LeftWrap>
                    <HeadingTwo>
                        <GradientText>Contact Me</GradientText>
                    </HeadingTwo>
                    <p>I'd love to hear from you.</p>
                    <ImageWrap transparent>
                        <Image
                          src={themeContext.contactImg}
                          height={775}
                          width={800}
                          alt="Hand holding telephone in a blob"
                        />
                  </ImageWrap>
                </LeftWrap>
                <Form />
            </FlexContainer>
        </ContactSectionWrap>
    )
}