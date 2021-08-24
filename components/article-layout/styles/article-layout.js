import styled from 'styled-components'
import { FlexContainer } from '../../../styles/global-styles'

export const FlexContainerArticleLayout = styled(FlexContainer)`
    flex-direction: column;

    @media (min-width: 1000px) {
        flex-direction: row;
        align-items: flex-start;
    }
`

export const Article = styled.article`
    width: 100%;
    padding: 2rem 0 0;
    max-width: 600px;
    margin: 0 auto;
`

export const Content = styled.div`
`

export const Aside = styled.aside`
    width: 100%;
    padding: 2rem 0 0;
    max-width: 600px;
    margin: 0 auto;

    @media (min-width: 1000px) {
        margin: 6rem 0 0 2rem;
        padding: 0 0 0 2rem;
        max-width: none;
        border-left: 0.0625rem solid #eee;
    }
`