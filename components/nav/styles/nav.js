import styled from 'styled-components'

export const Navbar = styled.nav`
    padding: 1rem 0;
    background: ${({ theme }) => theme.navBgColor};
    font-size: 1rem;
`

export const NavbarInner = styled.div`
    display: flex;
    justify-content: space-between;
`

export const NavLeft = styled.div`
    align-self: flex-start;
`

export const NavRight = styled.div`
    align-self: flex-end;
`

export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    list-style-type: none;
`

export const ListItem = styled.li`
    padding: 0 1.5rem 0 0;
`

export const Anchor = styled.a`
`