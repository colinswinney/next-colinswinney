import styled from "styled-components"
import { vars, FlexContainer } from '../../../styles/global-styles'
import { motion } from 'framer-motion'

export const JumbotronWrapper = styled.header`
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
    display: flex;
    align-items: center;
`

export const Heading = styled.h1`
    margin: 0;
    font-size: clamp(1.5rem,4vw + 1.5rem,5.5rem);
`

export const SubHeading = styled.h2`
    margin: 1.25rem 0 1.75rem;
    font-family: ${ vars.fontBody };
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.5;
    max-width: 90%;
    color: ${({ theme }) => theme.textAccent};

    @media (min-width: ${vars.breakpoint}) {
        font-size: 1.5rem;
        margin: 2rem 0 2.5rem;
    }
`