import styled from "styled-components"
import { vars, FlexContainer } from '../../../styles/global-styles'
import { BlobEl } from '../../../components/svg/blob/styles/blob'
import { GuitarEl } from '../../../components/svg/guitar/styles/guitar'
import { motion } from 'framer-motion'

export const JumbotronWrapper = styled.div`
    padding: 1rem 0;
`

export const Container = styled(FlexContainer)`
`

export const Left = styled(motion.div)`
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
`

export const Right = styled(motion.div)`
        width: 50%;
        position: relative;
        display: flex;
        align-items: center;

        ${GuitarEl} {
            position: absolute;
            width: 100%;
            top: 1rem;
            bottom: 0;
            right: 1rem;
            z-index: 2;

            @media (min-width: 900px) {
                width: 75%;
                right: 17.5%;
            }
        }
`

export const Heading = styled.h1`
    margin: 3rem 0 0;
    font-size: clamp(2.5rem, 3vw + 2.5rem, 5.5rem);

    
`

export const SubHeading = styled.h2`
    margin: 1rem 0;
    font-family: ${ vars.fontBody };
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.5;
    max-width: 90%;
    color: ${({ theme }) => theme.textAccent};

    @media (min-width: 500px) {
        font-size: 1.25rem;
    }

    @media (min-width: 700px) {
        font-size: 1.5rem;
    }

    @media (min-width: 900px) {
        font-size: 1.75rem;
    }
`