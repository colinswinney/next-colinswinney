import styled from 'styled-components'
import { c } from '../../../../styles/colors'
import { Wrapper } from '../../../image-wrap/styles/image-wrap'
import { vars, GridContainer, FlexContainer } from '../../../../styles/global-styles'

export const AboutSectionWrap = styled.section`
    display: flex;
    text-align: center;
    background-image: ${({theme}) => theme.aboutSectionBg};
    background-size: 2rem 2rem;
    background-position: center;
    border-top: 0.0625rem solid ${({ theme }) => theme.aboutSectionBorderColor};
    border-bottom: 0.0625rem solid ${({ theme }) => theme.aboutSectionBorderColor};

    @media (min-width: ${vars.breakpoint}) {
      min-height: 100vh;
    }
`

export const AboutSectionInner = styled.div`
    margin: auto;
    width: 100%;
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
    margin: 0 auto 1rem;
    font-size: clamp(1.25rem, 1vw + 1.25rem, 3rem);
    font-weight: 100;
    line-height: 1;
`

export const BottomText = styled(Text)`
    margin: 4rem auto 2rem;
    font-size: clamp(1rem, 0.5vw + 1rem, 2rem);
    max-width: 25ch;
`

export const GridContainerAbout = styled(GridContainer)`
    row-gap: 3vw;
    grid-template-areas:
      "a b c d e f"
      "g h i j k l";
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
`

export const LoopTextHeading = styled.h2`
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: ${vars.transition};
    margin: auto;
    font-size: clamp(2.5rem, 7vw, 4rem);

    &.active {
      opacity: 1;
    }
`