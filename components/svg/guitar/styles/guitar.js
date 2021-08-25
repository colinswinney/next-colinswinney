import styled from 'styled-components'

export const GuitarEl = styled.svg`
    margin: auto;
    fill-rule: evenodd;
    clip-rule: evenodd;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 1.5;
`

export const Blob = styled.path`
    fill: ${({ theme }) => theme.blobColor};
    fill-rule: nonzero;
`

export const PathGuitarBody = styled.path`
    fill: ${({ theme }) => theme.guitarFillOne};
    fill-rule: nonzero;
    animation: guitarBody 9s infinite;
`

export const RectGuitarBody = styled.rect`
    fill: ${({ theme }) => theme.guitarFillOne};
    fill-rule: nonzero;
    animation: guitarBody 9s infinite;
`