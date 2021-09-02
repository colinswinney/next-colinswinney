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