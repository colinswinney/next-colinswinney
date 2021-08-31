import styled from 'styled-components'
import { vars } from '../../../styles/global-styles'

export const WidgetWrapper = styled.div`
    margin-top: 0;
    margin-bottom: 3rem;
    word-wrap: break-word;
    overflow-wrap: anywhere;
    white-space: normal;

    &:last-of-type {
        margin-bottom: 0;
    }
`

export const Heading = styled.h4`
    margin: 0 0 1rem;
    font-weight: 200;
    font-family: ${ vars.fontBody };
`