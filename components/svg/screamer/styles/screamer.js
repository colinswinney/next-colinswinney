import styled from 'styled-components'

export const ScreamerEl = styled.svg`
    fill-rule: evenodd;
    clip-rule: evenodd;
    stroke-linejoin: round;
    stroke-miterlimit: 2;
    max-width: 300px;
`

export const ColorLight = styled.path`
    fill: ${({ theme }) => theme.screamerFillOne};
    fill-rule: nonzero;
    animation: screamer 8s infinite;
`

export const RectColorLight = styled.path`
    fill: ${({ theme }) => theme.screamerFillOne};
    fill-rule: nonzero;
    animation: screamer 8s infinite;
`