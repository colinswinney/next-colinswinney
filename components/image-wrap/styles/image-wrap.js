import styled from 'styled-components'
import { vars } from '../../../styles/global-styles'

export const Wrapper = styled.div`
    background-color: ${props => props.transparent ? "transparent" : `#fff`};
    filter: ${props => props.grayscale ? "grayscale(100%)" : "none"};
    padding: 0.25rem;
    display: inline-block;
    max-width: ${props => props.maxWidth};
    font-size: 0;
`
