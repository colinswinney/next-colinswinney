import styled from 'styled-components'
import { vars, FlexContainer } from '../../../styles/global-styles'

export const FlexContainerArticleLayout = styled(FlexContainer)`
    flex-direction: column;

    @media (min-width: ${vars.breakpointLarge}) {
        flex-direction: row;
        align-items: flex-start;
    }
`

export const Article = styled.article`
    width: 100%;
    max-width: 43.75rem;
    margin: 0;

    @media (min-width: ${vars.breakpointLarge}) {
        padding-right: 2rem;
    }
`

export const Content = styled.div`
    p:first-of-type {
        margin-top: 0;
    }
`

export const Aside = styled.aside`
    padding: 1rem;
    max-width: 18.75rem;
    margin: 0;
    border-radius: 1rem;
    background: ${({ theme }) => theme.bodyBgColorLight};
    box-shadow: 0 0.0625rem .1875rem rgba(0,0,0,0.12), 0 0.0625rem .125rem rgba(0,0,0,0.24);


    @media (min-width: ${vars.breakpointLarge}) {
        margin: 4rem 0 0 auto;
    }
`