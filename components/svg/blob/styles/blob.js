import styled from 'styled-components'

export const BlobEl = styled.svg`
    fill-rule: evenodd;
    clip-rule: evenodd;
    stroke-linejoin: round;
    stroke-miterlimit: 2;
`

export const BlobPath = styled.path`
    fill: ${({ theme }) => theme.blobColor};
    fill-rule: nonzero;
`