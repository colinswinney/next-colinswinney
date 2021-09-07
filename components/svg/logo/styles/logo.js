import styled from 'styled-components'
import { c } from '../../../../styles/colors'

export const GiraffePath = styled.path`
`

export const LogoEl = styled.svg`
    fill-rule: evenodd;
    clip-rule: evenodd;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 1.5;
    width: 100%;

    path {
        fill: ${({ theme }) => theme.linkColor};
    }

    ${GiraffePath} {
        fill: ${({ theme }) => theme.giraffe};
    }

`

