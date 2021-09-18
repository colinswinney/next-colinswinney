import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from '../../styles/global-styles'
import { Navbar, NavbarInner, List, ListItem, NavToggle } from './styles/nav'
import Logo from '../svg/logo'


const Nav = ({ children }) => {
    const router = useRouter()
    const [isNavActive, setNavActive] = useState(false)
    const [showMobileNav, setShowMobileNav] = useState(false)
    const [toggleIcon, setToggleIcon] = useState('menu')

    useEffect(() => {
        if ( window.innerWidth > 767) {
            setShowMobileNav(false)
        } else if ( window.innerWidth <= 767) {
            setShowMobileNav(true)
        }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if ( window.innerWidth > 767) {
                setShowMobileNav(false)
                setNavActive(false)
                setToggleIcon('menu')
            } else if ( window.innerWidth <= 767) {
                setShowMobileNav(true)
            }
        }
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const handleToggle = () => {
        setNavActive(!isNavActive)
        setShowMobileNav(!showMobileNav)
        toggleIcon === 'menu' ? setToggleIcon('close') : setToggleIcon('menu')
    };

    useEffect(() => {
        if (isNavActive) {
            setNavActive(!isNavActive)
            setToggleIcon('menu')
        }
    }, [router.asPath]);

    useEffect(() => {
        if (isNavActive) {
            document.querySelector("body").classList.add("nav-menu-active")
            console.log('active')
        }
        else {
            document.querySelector("body").classList.remove("nav-menu-active")
        }
    }, [])

    return (
        <Navbar>
            <Container>
                <NavbarInner>
                    <Link href="/" passHref>
                        <a className={router.pathname == "/" ? "active" : ""}>
                            <Logo />
                        </a>
                    </Link>
                    <List className={isNavActive ? "active" : null}>

                        <ListItem className="mobile-logo">
                            <Link href="/" passHref>
                                <a className={router.pathname == "/" ? "active" : ""}>
                                    <Logo />
                                </a>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href="/projects" passHref>
                                <a className={router.pathname == "/" ? "active" : ""}>
                                    Projects
                                </a>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href="/about" passHref>
                                <a className={router.pathname == "/about" ? "active" : ""}>
                                    About
                                </a>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href="/contact" passHref>
                                <a className={router.pathname == "/contact" ? "active" : ""}>
                                    Contact
                                </a>
                            </Link>
                        </ListItem>

                        <ListItem className="theme-btn">
                            { children }
                        </ListItem>
                    </List>
                    <NavToggle onClick={handleToggle} >
                    <span className="material-icons dark">
                        { toggleIcon }
                    </span>
                    </NavToggle>
                </NavbarInner>
            </Container>
            
        </Navbar>
    )
}

export default Nav