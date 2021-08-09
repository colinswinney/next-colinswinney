import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from '../../global-styles'
import {
    Navbar,
    NavbarInner,
    NavLeft,
    NavRight,
    List,
    ListItem,
    Anchor
} from './styles/nav'

const Nav = ({ children }) => {
    const router = useRouter()

    return (
        <Navbar>
            <Container>
                <NavbarInner>
                    <NavLeft>
                        <List>

                            <ListItem>
                                <Link href="/">
                                    <Anchor className={router.pathname == "/" ? "active" : ""}>
                                        Home
                                    </Anchor>
                                </Link>
                            </ListItem>
                            
                            <ListItem>
                                <Link href="/about">
                                    <Anchor className={router.pathname == "/about" ? "active" : ""}>
                                        About
                                    </Anchor>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link href="/projects">
                                    <Anchor className={router.pathname == "/" ? "active" : ""}>
                                        Projects
                                    </Anchor>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link href="/contact">
                                    <Anchor className={router.pathname == "/contact" ? "active" : ""}>
                                        Contact
                                    </Anchor>
                                </Link>
                            </ListItem>

                        </List>
                    </NavLeft>
                    <NavRight>
                        { children }
                    </NavRight>
                </NavbarInner>
            </Container>
            
        </Navbar>
    )
}

export default Nav