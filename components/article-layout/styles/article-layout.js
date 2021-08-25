import styled from 'styled-components'
import { FlexContainer } from '../../../styles/global-styles'

export const FlexContainerArticleLayout = styled(FlexContainer)`
    flex-direction: column;

    @media (min-width: 62.5rem) {
        flex-direction: row;
        align-items: flex-start;
    }
`

export const Article = styled.article`
    width: 100%;
    padding: 2rem 0 0;
    max-width: 37.5rem;
    margin: 0 auto;
`

export const Content = styled.div`
`

export const Aside = styled.aside`
    width: 100%;
    padding: 1rem;
    max-width: 37.5rem;
    margin: 0 auto;
    border-radius: 1rem;
    background: ${({ theme }) => theme.bodyBgColorLight};
    box-shadow: 0 0.0625rem .1875rem rgba(0,0,0,0.12), 0 0.0625rem .125rem rgba(0,0,0,0.24);


    @media (min-width: 62.5rem) {
        margin: 6rem 0 0 2rem;
        max-width: none;
    }
`