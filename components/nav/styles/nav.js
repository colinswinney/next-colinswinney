import styled from 'styled-components'
import { vars, Container, AnchorButton } from '../../../styles/global-styles'

export const Navbar = styled.nav`
    background: ${({ theme }) => theme.navBgColor};
    font-size: 1.2rem;

    ${Container} {
        box-sizing: border-box;
    }
`

export const NavbarInner = styled.div`
    display: flex;
`

export const NavLeft = styled.div`
    align-self: center;
`

export const NavRight = styled.div`
    align-self: flex-end;
`

export const List = styled.ul`
    padding: 0;
    margin: 0 auto 0 0;
    display: none;
    list-style-type: none;

    &.active {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        background: ${({ theme }) => theme.bodyBgColor};
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        right: 0;
        border: 0;
        z-index: 999;
    }

    @media (min-width: ${vars.breakpoint}) {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
    }
`

export const ListItem = styled.li`
    padding: 0;
    margin: 1rem 0;
    display: flex;
    align-items: center;

    @media (min-width: ${vars.breakpoint}) {
        margin: 0 0 0 2.5rem;

        &.theme-btn {
            margin: 0 0 0 auto;
        }
    }

    &.mobile-logo {
        @media (min-width: ${vars.breakpoint}) {
            display: none;
        }
    }
`

export const NavToggle = styled.span`
    position: absolute;
    top: 1.25rem;
    right: 1rem;
    z-index: 9999;
    cursor: pointer;

    @media (min-width: ${vars.breakpoint}) {
        display: none;
    }
`

export const AnchorButtonCircle = styled(AnchorButton)`
    border-radius: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;

    &:before,
    &:after {
        border-radius: 100%;
    }

    @media (min-width: ${vars.breakpoint}) {
        width: 3.25rem;
        height: 3.25rem;
    }
`