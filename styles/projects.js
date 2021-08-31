import styled from 'styled-components'
import { FlexContainer } from './global-styles'

export const FlexContainerProjects = styled(FlexContainer)`
    flex-wrap: wrap;
    justify-content: center;
    gap: 6rem;
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