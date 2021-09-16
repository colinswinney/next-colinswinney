import styled from "styled-components"
import { c } from '../../../styles/colors'
import { vars, GridContainer, AnchorButton } from '../../../styles/global-styles'
import { ImageWrapEl } from '../../image-wrap/styles/image-wrap'
import { GuitarEl } from '../../svg/guitar/styles/guitar'
import { motion } from 'framer-motion'

export const JumbotronEl = styled.header`
    min-height: calc(100vh - 5.75rem);
    display: flex;
    align-content: center;
    justify-content: center;
    background: ${({ theme}) => theme.jumboGradient};
`

export const Container = styled(GridContainer)`
    margin-top: 4rem;
    text-align: center;
    grid-template-areas:
        "title"
        "text"
        "image";

    ${GuitarEl},
    ${ImageWrapEl} {
        max-width: 20rem;
        margin: 2rem auto 0;
        grid-area: image;
    }

    @media (min-width: ${vars.breakpoint}) {
        margin-top: auto;
        text-align: left;
        grid-template-columns: 1fr 2rem 1fr;
        grid-template-areas:
            ". . image"
            "title . image"
            "text . image"
            ". . image";

        ${GuitarEl},
        ${ImageWrapEl} {
            max-width: 500px;
        }
    }
`

export const Heading = styled.h1`
    margin: 0;
    grid-area: title;
    color: ${({ theme }) => theme.headingColor};
`

export const SubHeading = styled.h2`
    margin: 1.25rem auto 0;
    max-width: 35ch;
    font-family: ${ vars.fontBody };
    font-weight: 200;
    font-size: 1.33rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.textAccent};
    grid-area: text;

    ${AnchorButton} {
        display: block;
        margin: 1.5rem auto 2rem;
    }

    @media (min-width: ${vars.breakpoint}) {
        font-size: 1.77rem;
        margin: 2rem 0 2.5rem;

        ${AnchorButton} {
            margin: 2.5rem 0 0;
        }
    }
`