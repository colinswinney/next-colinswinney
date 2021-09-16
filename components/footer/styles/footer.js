import styled from 'styled-components'
import { FlexContainer } from '../../../styles/global-styles'
import { GitHubEl } from '../../svg/github/styles/github'
import { LinkedInEl } from '../../svg/linkedin/styles/linkedin'

export const FooterEl = styled.footer`
    padding: 1rem;
    text-align: center;
` 

export const FlexContainerFooter = styled(FlexContainer)`
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
` 

export const Text = styled.small`
    margin: 1rem auto;
    font-size: 0.75rem;
    width: 100%;
    line-height: 1.4;
`

export const IconWrap = styled.div`
    margin: 0 .5rem;

    ${GitHubEl},
    ${LinkedInEl} {
        fill: ${({ theme }) => theme.linkColor};

        &:hover {
            fill: ${({ theme }) => theme.linkColorHover};
        }
    }
`