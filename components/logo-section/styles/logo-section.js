import styled from 'styled-components'
import { Wrapper } from '../../image-wrap/styles/image-wrap'
import { c } from '../../../styles/colors'
import { vars, FlexContainer } from '../../../styles/global-styles'

export const Section = styled.section`
    padding: 3rem 0 2rem;
    // background: linear-gradient(90deg, ${c.bluegrey200}, ${c.bluegrey50});

    ${FlexContainer} {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        ${Wrapper} {
            width: 30%;
            text-align: center;
            filter: invert(${({ theme }) => theme.invert});
        }
    }
`

export const TextWrap = styled.div`
    width: 100%;
    text-align: center;

    h2 {
        margin-bottom: 1rem;
    }
`