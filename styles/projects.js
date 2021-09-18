import styled from 'styled-components'
import { vars, FlexContainer } from './global-styles'

export const FlexContainerProjects = styled(FlexContainer)`
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;

    @media (min-width: ${vars.breakpoint}) {
        gap: 6rem;
    }
`

export const Anchor = styled.a`

    h4 {
        color: ${({ theme }) => theme.linkColor};
    }

    &:hover,
    &:focus {
        
        h4 {
            color: ${({ theme }) => theme.linkColorHover};
        }

    }
`

export const ProjectsNav = styled.nav`
    padding: 1rem;
    margin: 4rem auto auto;   
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: ${vars.breakpointLarge};
`

export const ProjectsListAnchor = styled.a`
    margin: 0.5rem 1rem 0.5rem 0;
    text-align: center;

    &:nth-child(n+2) {
        &:before {
            content: "\\2022";
            padding-right: 1rem;
            display: inline-block;
            color: ${({ theme }) => theme.textColor};
        }
    }
`