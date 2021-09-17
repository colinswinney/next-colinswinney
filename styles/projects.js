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

export const ProjectsList = styled.ul`
    padding: 0;
    list-style-type: none;
    text-align: center;
`

export const ProjectsListItem = styled.li`
    margin-right: 1rem;
    display: inline-block;

    &:nth-child(n+2) {
        &:before {
            content: '';
            display: inline-block;
            vertical-align: middle;
            margin-right: 1rem;
            height: 0.25rem;
            width: 0.25rem;
            border-radius: 100%;
            background: ${({ theme }) => theme.textColor};
        }
    }
`