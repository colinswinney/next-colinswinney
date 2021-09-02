import { createGlobalStyle} from "styled-components"
import styled from 'styled-components';
import { c } from './colors'

export const vars = {
    light: `#fafafa`,
    dark: `#121212`,
    textGrey: c.bluegrey800,
    fontBody: `'Poppins', Helvetica, Arial, sans-serif`,
    fontHeading: `'Work Sans', Helvetica, Arial, sans-serif`,
    transition: `0.2s ease`,
    breakpoint: `43.75rem`,
    breakpointLarge: `62.5rem`
}

export const lightTheme = {
    bodyBgColor: `#fafafa`,
    headingColor: c.bluegrey800,
    textColor: c.bluegrey800,
    textAccent: c.bluegrey700,
    accentColorOne: c.indigo300,
    accentColorTwo: c.indigo800,
    linkColor: c.indigo600,
    linkColorHover: c.indigo300,
    blobColor: c.orange200,
    guitarFillOne: c.indigo800,
    guitarFillTwo: c.deeporangeA700,
    guitarFillThree: `#470326`,
    bodyBgColorLight: `#fff`,
    contactFormBg: `rgba(255,255,255, 0.95)`,
    contactImg: `/images/milwaukee-daylight.jpeg`,
    gradient: `linear-gradient(30deg, ${c.indigo800}, ${c.indigo300})`,
    aboutSectionBorderColor: `rgba(232, 234, 246, .3)`,
    aboutSectionBg: `linear-gradient(rgba(232, 234, 246, .3) .1em, transparent .1em), linear-gradient(90deg, rgba(232, 234, 246, .3) .1em, transparent .1em)`,
    logoSectionBg: c.grey100,
    homeImg: "/images/headers/blob-home.png",
    aboutImg: "/images/headers/blob-me.png",
    projectsImg: "/images/headers/blob-screamer.png",
    contactImg: "/images/headers/blob-telephone.png",
    invert: `0`
}
//d4af37
export const darkTheme = {
    bodyBgColor: `#121212`,
    headingColor: c.grey200,
    textColor: c.grey300,
    textAccent: c.grey500,
    accentColorOne: c.purple300,
    accentColorTwo: c.purple600,
    linkColor: c.purple300,
    linkColorHover: c.purple100,
    blobColor: c.teal200,
    guitarFillOne: c.purple800,
    guitarFillTwo: c.pink500,
    guitarFillThree: c.grey200,
    bodyBgColorLight: `#212121`,
    contactFormBg: `rgba(33,33,33, 0.95)`,
    contactImg: `/images/milwaukee-night.jpeg`,
    gradient: `linear-gradient(30deg, ${c.purple600}, ${c.purple200})`,
    aboutSectionBorderColor: `rgba(55, 55, 55, .1)`,
    aboutSectionBg: `linear-gradient(rgba(55, 55, 55, .1) .1em, transparent .1em), linear-gradient(90deg, rgba(55, 55, 55, .1) .1em, transparent .1em);`,
    logoSectionBg: c.grey200,
    homeImg: "/images/headers/blob-home-dark.png",
    aboutImg: "/images/headers/blob-me-dark.png",
    projectsImg: "/images/headers/blob-screamer-dark.png",
    contactImg: "/images/headers/blob-telephone-dark.png",
    invert: `1`
}

export const GlobalStyles = createGlobalStyle`

    @keyframes guitarBody {
        0% {
            fill: ${({ theme }) => theme.guitarFillOne};
        }
        30% {
            fill: ${({ theme }) => theme.guitarFillOne};
        }
        33% {
            fill: ${({ theme }) => theme.guitarFillTwo};
        }
        63% {
            fill: ${({ theme }) => theme.guitarFillTwo};
        }
        66% {
            fill: ${({ theme }) => theme.guitarFillThree};
        }
        97% {
            fill: ${({ theme }) => theme.guitarFillThree};
        }
        100% {
            fill: ${({ theme }) => theme.guitarFillOne};
        }
    }

    html,
    body {
        font-size: 100%;
        font-family: -apple-system,system-ui,blinkmacsystemfont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif;
    }

    body {
        background: ${({ theme }) => theme.bodyBgColor};
        color: ${({ theme }) => theme.textColor};
        font-family: ${ vars.fontBody };
        position: relative;
        font-size: 1.2rem;
    }

    body.nav-menu-active {
        overflow: hidden;
    }

    * {
        box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        line-height: 1;
        font-family: ${ vars.fontHeading };
        color: ${({ theme }) => theme.headingColor};
    }

    h1 {
        font-size: 3.15rem;
    }

    h2 {
        font-size: 2.36rem;
    }

    h3 {
        font-size: 1.77rem;
    }

    h4 {
        font-size: 1.33rem;
    }

    h5 {
        font-size: 1rem;
    }

    h6 {
        font-size: 0.8rem;
    }

    @media (min-width: ${vars.breakpoint}) {
        body {
            font-size: 1.33rem;
        }
        
        h1 {
            font-size: 4.2rem;
        }
    
        h2 {
            font-size: 3.15rem;
        }
    
        h3 {
            font-size: 2.36rem;
        }
    
        h4 {
            font-size: 1.77rem;
        }
    
        h5 {
            font-size: 1.33rem;
        }
    
        h6 {
            font-size: 1rem;
        }
    }

    p, ul, ol {
        margin-bottom: 2.5rem;
        line-height: 2;
    }

    a {
        color: ${({ theme }) => theme.linkColor};
        text-decoration: none;
        font-weight: 700;

        &:hover {
            color: ${({ theme }) => theme.linkColorHover};
            text-decoration: underline;
            cursor: pointer;
        }
    }

    section {
        padding: 5rem 1rem;
    }

    figure {
        margin: 3rem auto 2.5rem;
        padding: 0;
        max-width: 90%;
        text-align: center;
        font-size: 1rem;

    }

    figure img {
        margin: auto auto .5rem;
        height: auto !important;
        max-width: 100%;
    }

    strong {
        font-weight: bold;
    }

    .material-icons.light,
    .material-icons.dark {
        margin: 0;
        color: ${({ theme }) => theme.textColor};
        font-size: 2rem;
        background-image: ${({ theme }) => theme.gradient};
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;

        @media (min-width: ${vars.breakpoint}) {
            font-size: 2.5rem;
        }
    }
`

export const ThemeButton = styled.button`
    border: none;
    border-radius: 100%;
    background: none;
    cursor: pointer;
    position: relative;
        
    &:hover {
        opacity: 0.7;
    }

    &:after {
        position: absolute;
        content: 'theme';
        text-transform: uppercase;
        font-size: 0.625rem;
        margin: auto;
        bottom: -0.5rem;
        left: 0;
        right: 0;
        color: #999;
    }
`

export const Container = styled.div`
    margin: auto;
    padding: 1rem;
    width: 100%;
    max-width: 75rem;
`

export const FlexContainer = styled(Container)`
    display: flex;
`

export const GridContainer = styled(Container)`
    display: grid;
`

export const GradientText = styled.span`
    background-color: ${({ theme }) => theme.accentColorOne};
    background-image: ${({ theme }) => theme.gradient};
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
`

export const AnchorButton = styled.a`
    padding: .5rem 1.5rem;
    width: max-content;
    color: ${vars.light};
    background: ${({ theme }) => theme.gradient};
    display: inline-block;
    font-size: 1rem;
    box-sizing: content-box;
    position: relative;
    text-transform: capitalize;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: ${({ theme }) => theme.gradient};
        z-index: -1;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0.125rem;
        right: 0.125rem;
        bottom: 0.125rem;
        left: 0.125rem;
        background: ${({ theme }) => theme.bodyBgColor};
        z-index: -1;
    }

    @media (min-width: ${vars.breakpoint}) {
        font-size: 1.33rem;
    }

    &:hover {
        background-color: ${({ theme }) => theme.accentColorOne};
        background-image: ${({ theme }) => theme.gradient};
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
        text-decoration: none;
    }
`