import styled from 'styled-components'
import { ImageWrapEl } from '../../../image-wrap/styles/image-wrap'
import { c } from '../../../../styles/colors'
import { vars, FlexContainer } from '../../../../styles/global-styles'

export const LogoSectionWrap = styled.section`
    display: flex;
    position: relative;

    @media (min-width: ${vars.breakpoint}) {
        min-height: 100vh;
    }

    ${FlexContainer} {
        padding: 0;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        ${ImageWrapEl} {
            flex: 1 0 33.33%;
            text-align: center;
            filter: invert(${({ theme }) => theme.invert});
        }
    }
`

export const LogoSectionInner = styled.div`
    margin: auto;
    width: 100%;
`

export const TextWrap = styled.div`
    width: 100%;
    text-align: center;

    h2 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1rem;
        line-height: 1.2;
    }
`