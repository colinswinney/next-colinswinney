import styled from 'styled-components'
import { vars, Container, FlexContainer } from './global-styles'

export const List = styled.ul`
    padding-left: 0;
    margin: 0;
    list-style-type: none;
`

export const ListItem = styled.li`
    font-weight: bold;
`

export const Icon = styled.span`
    font-size: .8rem !important;
`

export const AddressWrap = styled.div`
    position: relative;
    padding-left: 1.0625rem;

    ${Icon} {
        position: absolute;
        margin: auto;
        left: 0;
        top: 0.375rem;
    }
`
