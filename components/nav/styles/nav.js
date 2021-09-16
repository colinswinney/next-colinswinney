import styled from 'styled-components'
import { vars, Container, AnchorButton } from '../../../styles/global-styles'
import { LogoEl, GiraffePath } from '../../svg/logo/styles/logo'

export const Navbar = styled.nav`
    background: ${({ theme }) => theme.navBgColor};
    font-size: 1.33rem;

    ${Container} {
        box-sizing: border-box;
    }

    ${LogoEl} {
        width: 10rem;

        &:hover {
            path {
                fill: ${({ theme }) => theme.linkColorHover};
            }
            ${GiraffePath} {
                fill: ${({ theme }) => theme.linkColorHover};
            }
        }
    }
`

export const NavbarInner = styled.div`
    display: flex;
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
        min-height: 100vh;
        min-width: 100vw;
        top: 0;
        left: 0;
        right: 0;
        border: 0;
        z-index: 999;
    }

    @media (min-width: ${vars.breakpoint}) {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
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
            // margin: 0 0 0 auto;
        }
    }

    &.mobile-logo {
        @media (min-width: ${vars.breakpoint}) {
            display: none;
        }
    }
`

export const NavToggle = styled.button`
    padding: 0;
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    z-index: 9999;
    cursor: pointer;
    background: none;
    border: none;

    @media (min-width: ${vars.breakpoint}) {
        display: none;
    }
`