import styled from 'styled-components'
import { vars, FlexContainer } from '../../../../styles/global-styles'
import { FormEl } from '../../../form/styles/form'
import { Wrapper } from '../../../image-wrap/styles/image-wrap'

export const ContactSectionWrap = styled.section`
    display: flex;

    @media (min-width: ${vars.breakpoint}) {
        min-height: 100vh;
    }

    ${FlexContainer} {
        flex-direction: column;
        padding: 0;

        @media (min-width: ${vars.breakpointLarge}) {
            flex-direction: row;
            justify-content: space-around;
            display: flex;

            ${FormEl} {
                margin: 0;
            }
            
        }

    }
`

export const LeftWrap = styled.div`
    text-align: center;

    ${Wrapper} {
        display: none;
    }
    @media (min-width: ${vars.breakpointLarge}) {
        padding-right: 2rem;

        ${Wrapper} {
            display: inline-block;
            max-width: 20rem;
        }
    }
`

export const HeadingTwo = styled.h2`

    @media (min-width: ${vars.breakpointLarge}) {
        margin: 2.5rem 0 4rem;
    }
`
