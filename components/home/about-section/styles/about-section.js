import styled from 'styled-components'
import { c } from '../../../../styles/colors'
import { Wrapper } from '../../../image-wrap/styles/image-wrap'
import { vars, GridContainer, FlexContainer } from '../../../../styles/global-styles'

export const AboutSectionWrap = styled.section`
    text-align: center;
    background-image: ${({theme}) => theme.aboutSectionBg};
    background-size: 2rem 2rem;
`

export const FlexContainerAboutSection = styled(FlexContainer)`
    flex-wrap: wrap;

    ${Wrapper} {
      flex: 1 0 16%;
      margin: 0 0 0.5rem;
      filter: grayscale(100) brightness(0.5);
      opacity: 0.75;
      transition: ${vars.transition};

      &.active {
        opacity: 1;
        filter: grayscale(0) brightness(1);
      }

    }
`

export const Text = styled.p`
    font-family: ${vars.fontBody};
    margin-bottom: 1rem;
    font-size: clamp(1.25rem, 1vw + 1.25rem, 3rem);
    font-weight: 100;
    line-height: 1;
`

export const BottomText = styled(Text)`
    margin: 2rem auto;
    font-size: clamp(1rem, 0.5vw + 1rem, 2rem);
    max-width: 70vw;
`

export const GridContainerAbout = styled(GridContainer)`
    margin-bottom: 2rem;
    row-gap: 3vw;
    grid-template-areas:
      "a b c d e"
      "l t t t f"
      "k j i h g";
`

export const ImageWrapGrid = styled(Wrapper)`
    grid-area: ${props => props.gridArea};
    filter: grayscale(1) brightness(0.5);
    opacity: 0.75;
    transition: ${vars.transition};
    width: clamp(5vw, 8vw, 4rem);
    height: clamp(5vw, 8vw, 4rem);
    margin: auto;

    &.active {
      opacity: 1;
      filter: grayscale(0) brightness(1);
      transform: scale(1.5);
    }
`

export const LoopTextWrap = styled.div`
    position: relative;
    height: clamp(2rem, 7vw, 4rem);
    width: 100%;
    grid-area: t;
    place-self: center;
`

export const LoopTextHeading = styled.h2`
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: ${vars.transition};
    margin: auto;
    font-size: clamp(1.5rem, 6vw, 4rem);

    &.active {
      opacity: 1;
    }
`