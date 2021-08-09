import { createGlobalStyle} from "styled-components"
import styled from 'styled-components';

export const lightTheme = {
    bodyBgColor: '#fafafa',
    textColor: '#363537',
    accentColorOne: '#2193b0',
    accentColorTwo: '#60d4b4',
    background: '#363537',
    gradient: `linear-gradient(30deg, #2193b0, #60d4b4)`
}

export const darkTheme = {
    bodyBgColor: '#141d26',
    textColor: '#fafafa',
    accentColorOne: '#ec008c',
    accentColorTwo: '#fc6767',
    background: '#999',
    gradient: `linear-gradient(30deg, #ec008c, #fc6767)`
}

export const GlobalStyles = createGlobalStyle`

    @keyframes guitarBody {
        0% {
            fill: ${({theme}) => theme.accentColorOne};
        }
        22% {
            fill: ${({theme}) => theme.accentColorOne};
        }
        33% {
            fill: #bf4119;
        }
        55% {
            fill: #bf4119;
        }
        66% {
            fill: #400122;
        }
        88% {
            fill: #400122;
        }
        100% {
            fill: ${({theme}) => theme.accentColorOne};
        }
    }

    html,
    body {
        font-size: 100%;
    }

    body {
        background: ${({ theme }) => theme.bodyBgColor};
        color: ${({ theme }) => theme.textColor};
        font-family: 'Poppins', Helvetica, Arial, sans-serif;
        position: relative;
    }

    * {
        transition: all 0.1s ease;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        line-height: 1;
        font-family: 'Work Sans', sans-serif;
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

    a {
        color: ${({ theme }) => theme.accentColorOne};
        text-decoration: none;
        font-weight: 700;

        &:hover,
        &:focus {
            color: ${({ theme }) => theme.accentColorTwo};
            text-decoration: underline;
            cursor: pointer;
        }
    }
`

export const ThemeButton = styled.button`
    color: ${({ theme }) => theme.bodyBgColor};
    background-color: ${({ theme }) => theme.textColor};
    border: .0625rem solid ${({ theme }) => theme.accentColorOne};
    border-radius: 100%;
    height: 3rem;
    width: 3rem;
    cursor: pointer;
`

export const Container = styled.div`
    margin: auto;
    padding: 1rem;
    max-width: 1000px;
`

export const GradientText = styled.span`
    background-color: #f3ec78;
    background-image: ${({ theme }) => theme.gradient};
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
`