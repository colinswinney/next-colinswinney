import styled from 'styled-components'
import { vars, GridContainer } from '../../../styles/global-styles'
import { WidgetEl } from '../../widget/styles/widget'

export const GridContainerArticleLayout = styled(GridContainer)`
    max-width: ${vars.breakpoint};
    grid-template-areas:
        "aside"
        "article";

    @media (min-width: ${vars.breakpointLarge}) {
        max-width: 75rem;
        grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
        grid-template-areas:
            "article aside";
    }
`

export const Article = styled.article`
    margin: 0;
    grid-area: article;

    @media (min-width: ${vars.breakpointLarge}) {
        padding-right: 4rem;
    }
`

export const Content = styled.div`
    p:first-of-type {
        margin-top: 0;
    }
`

export const Aside = styled.aside`
    height: fit-content;
    padding: 1rem;
    margin: 0 0 6rem 0;
    border-radius: 1rem;
    background: ${({ theme }) => theme.bodyBgColorLight};
    box-shadow: 0 0.0625rem .1875rem rgba(0,0,0,0.12), 0 0.0625rem .125rem rgba(0,0,0,0.24);
    grid-area: aside;
    display: grid;
    grid-template-areas:
        "image"
        "address"
        "summary"
        "tools";

    @media (min-width: ${vars.breakpointSmall}) {

        grid-template-columns: 1fr 1fr 3rem 1fr;
        grid-template-areas:
            "address address . tools"
            "summary summary . tools";

            ${WidgetEl}:nth-child(2) {
                margin-bottom: 0;
            }
    }
    
    @media (min-width: ${vars.breakpointLarge}) {
        margin: 4rem 0 0 auto;
        display: block;

        ${WidgetEl}:nth-child(2) {
            margin-bottom: 3rem;
        }
    }
`