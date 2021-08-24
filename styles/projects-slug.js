import styled from 'styled-components'
import { vars, Container, FlexContainer } from './global-styles'

export const FlexContainerSlug = styled(FlexContainer)`
    flex-direction: column;

    @media (min-width: 1000px) {
        flex-direction: row;
        align-items: flex-start;
    }
`

export const Column = styled.div`
    width: 100%;
    padding: 2rem 0 0;
    max-width: 600px;
    display: block;
    margin: 0 auto;

    @media (min-width: 1000px) {
        padding: ${props => props.two ? '4rem 0 0 2rem' : '0'};
        max-width: 65%;
    }
`

export const Content = styled.div`
`

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

export const BackBtnContainer = styled(Container)`

    @media (max-width: 999px) {
        max-width: 600px;
        padding: 0;
    }
`