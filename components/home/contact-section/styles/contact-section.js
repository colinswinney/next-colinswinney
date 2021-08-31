import styled from 'styled-components'
import { vars, FlexContainer } from '../../../../styles/global-styles'
import { FormEl } from '../../../form/styles/form'
import { Wrapper } from '../../../image-wrap/styles/image-wrap'

export const ContactSectionWrap = styled.section`
    // background-image: url('${({ theme }) => theme.contactImg}');
    // background-size: cover;
    // background-position: center center;

    ${FlexContainer} {
        flex-direction: column;

        @media (min-width: ${vars.breakpointLarge}) {
            flex-direction: row;
            justify-content: space-around;
            display: flex;
            align-items: center;

            ${FormEl} {
                margin: 0;
            }
            
        }

    }
`

export const LeftWrap = styled.div`
    padding-right: 3rem;
    text-align: center;

    @media (min-width: ${vars.breakpointLarge}) {
        text-align: left;
    }

    ${Wrapper} {
        max-width: 60%;
    }
`

export const HeadingTwo = styled.h2`
    margin-bottom: 1rem;
`
