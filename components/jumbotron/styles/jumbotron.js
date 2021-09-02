import styled from "styled-components"
import { vars, GridContainer, AnchorButton } from '../../../styles/global-styles'
import { Wrapper } from '../../image-wrap/styles/image-wrap'
import { GuitarEl } from '../../svg/guitar/styles/guitar'
import { motion } from 'framer-motion'

export const JumbotronWrapper = styled.header`
    margin-top: 2rem;

    @media (min-width: ${vars.breakpoint}) {
        margin-top: 0;

        &.home-jumbotron {
            margin-top: 4rem;
        }
    }
`

export const Container = styled(GridContainer)`
    text-align: center;
    grid-template-areas:
        "title"
        "text"
        "image";

    ${GuitarEl},
    ${Wrapper} {
        max-width: 25rem;
        margin: auto;
        grid-area: image;
    }

    @media (min-width: ${vars.breakpoint}) {
        text-align: left;
        grid-template-columns: 1fr 1rem 1fr;
        grid-template-areas:
            ". . image"
            "title . image"
            "text . image"
            ". . image";

        ${GuitarEl},
        ${Wrapper} {
            max-width: 25rem;
        }
    }
`

export const Heading = styled.h1`
    margin: 0;
    grid-area: title;
`

export const SubHeading = styled.h2`
    margin: 1.25rem 0 0;
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