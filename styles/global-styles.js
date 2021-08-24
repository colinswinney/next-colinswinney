import { createGlobalStyle} from "styled-components"
import styled from 'styled-components';
import { c } from './colors'

export const vars = {
    light: `#fefefe`,
    dark: `#121212`,
    textGrey: c.bluegrey800,
    fontBody: `'Poppins', Helvetica, Arial, sans-serif`,
    fontHeading: `'Work Sans', Helvetica, Arial, sans-serif`,
    guitarFill: '#400122'
}

export const lightTheme = {
    bodyBgColor: `#fefefe`,
    bodyBgColorInverse: `#121212`,
    textColor: c.bluegrey800,
    textAccent: c.bluegrey700,
    accentColorOne: c.indigo300,
    accentColorTwo: c.indigo800,
    linkColor: c.indigo600,
    linkColorHover: c.indigo300,
    blobColor: c.orange200,
    guitarFillOne: `#bf4119`,
    guitarFillTwo: `#400122`,
    guitarFillThree: `#fafafa`,
    screamerFillOne: c.red200,
    screamerFillTwo: c.deeporange200,
    bodyBgColorLight: `#fff`,
    contactFormBg: `rgba(255,255,255, 0.95)`,
    contactImg: `https://images.unsplash.com/photo-1516685927992-05ed120733c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`,
    gradient: `linear-gradient(30deg, ${c.indigo800}, ${c.indigo300})`,
    logoSectionBg: c.grey100,
    homeImg: "/images/blob-home.png",
    aboutImg: "/images/blob-about.png",
    projectsImg: "/images/blob-screamer.png",
    invert: `0`
}

export const darkTheme = {
    bodyBgColor: `#121212`,
    bodyBgColorInverse: `#fefefe`,
    textColor: c.grey300,
    textAccent: c.grey500,
    accentColorOne: c.purple300,
    accentColorTwo: c.purple600,
    linkColor: c.purple200,
    linkColorHover: c.purple100,
    blobColor: c.teal200,
    guitarFillOne: c.green900,
    guitarFillTwo: c.pink800,
    guitarFillThree: `#232323`,
    screamerFillOne: c.teal100,
    screamerFillTwo: c.teal50,
    bodyBgColorLight: `#212121`,
    contactFormBg: `rgba(33,33,33, 0.95)`,
    contactImg: `https://images.unsplash.com/photo-1572854385707-8a41abaa5f95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80`,
    gradient: `linear-gradient(30deg, ${c.purple600}, ${c.purple200})`,
    logoSectionBg: c.grey200,
    homeImg: "/images/blob-home-dark.png",
    aboutImg: "/images/blob-about-dark.png",
    projectsImg: "/images/blob-screamer-dark.png",
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
    }

    body {
        background: ${({ theme }) => theme.bodyBgColor};
        color: ${({ theme }) => theme.textColor};
        font-family: ${ vars.fontBody };
        position: relative;
        font-size: 1.2rem;
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
    }

    h1 {
        font-size: 3.5rem;
    }

    h2 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 2rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    h5 {
        font-size: 1.25rem;
    }

    h6 {
        font-size: 1rem;
    }

    p, ul, ol {
        margin-bottom: 2.5rem;
        line-height: 2;
    }

    p:first-of-type {
        margin-top: 0;
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

    figure {
        margin: 3rem auto 2.5rem;
        padding: 0;
        max-width: 90%;
        text-align: center;
        font-size: 0.8rem;

    }

    figure img {
        margin: auto auto .5rem;
        height: auto !important;
        max-width: 100%;
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

        @media (min-width: 700px) {
            font-size: 2.5rem;
        }
    }

    body.contact {
        background-image: url('${({ theme }) => theme.contactImg}');
        background-size: cover;
        background-position: center center;
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
        bottom: -0.25rem;
        left: 0;
        right: 0;
        color: #999;
    }
`

export const Container = styled.div`
    margin: auto;
    padding: 1rem;
    width: 100%;
    max-width: 1000px;
    display: ${props => props.flex ? 'flex' : 'block'};
`

export const FlexContainer = styled(Container)`
    display: flex;
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
    margin-bottom: 4rem;
    width: max-content;
    color: ${vars.light};
    background: ${({ theme }) => theme.gradient};
    display: inline-block;
    font-size: 0.75rem;
    box-sizing: content-box;
    position: relative;

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

    @media (min-width: 500px) {
        font-size: 1rem;
    }

    @media (min-width: 700px) {
        font-size: 1.25rem;
    }

    @media (min-width: 900px) {
        margin-bottom: 1.5rem;
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