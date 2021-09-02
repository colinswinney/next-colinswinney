import styled from 'styled-components'
import { Container, vars } from '../../../styles/global-styles'

export const Header = styled.header`
    text-align: center;
    margin: 2rem auto 0;
`

export const SlugHeaderContainer = styled(Container)`
    background: ${({ theme }) => theme.gradient};
`

export const HeadingOne = styled.h1`
    margin: 2rem auto;
    color: ${vars.light};
`

export const Triangle = styled.div`
    
`