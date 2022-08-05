import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "../../styles/global-styles";
import { Navbar, NavbarInner, List, ListItem, NavToggle } from "./styles/nav";
import Logo from "../svg/logo";
import Menu from "../svg/menu";
import Close from "../svg/close";

const Nav = ({ children }) => {
	const router = useRouter();
	const [isNavActive, setNavActive] = useState(false);
	const [showMobileNav, setShowMobileNav] = useState(false);

	useEffect(() => {
		if (window.innerWidth > 767) {
			setShowMobileNav(false);
		} else if (window.innerWidth <= 767) {
			setShowMobileNav(true);
		}
	}, []);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 767) {
				setShowMobileNav(false);
				setNavActive(false);
			} else if (window.innerWidth <= 767) {
				setShowMobileNav(true);
			}
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleToggle = () => {
		setNavActive(!isNavActive);
		setShowMobileNav(!showMobileNav);
	};

	const handleLinkClick = (routerPath, linkHref) => {
		if (routerPath === linkHref) {
			setNavActive(false);
		}
	}

	useEffect(() => {
		if (isNavActive) {
			setNavActive(isNavActive => !isNavActive);
		}
	}, [router.asPath]);

	useEffect(() => {
		if (isNavActive) {
			document.querySelector("body").classList.add("nav-menu-active");
		} else {
			document.querySelector("body").classList.remove("nav-menu-active");
		}
	}, []);

	return (
		<Navbar>
			<Container>
				<NavbarInner>
					<Link href="/" passHref>
						<a
							className={router.pathname == "/" ? "active" : ""}
							onClick={() => handleLinkClick(router.pathname, "/")}
						>
							<Logo aria-hidden="true" />
							<span className="sr-only">Home</span>
						</a>
					</Link>
					<List className={isNavActive ? "active" : null}>
						<ListItem className="mobile-logo">
							<Link href="/" passHref>
								<a
									className={router.pathname == "/" ? "active" : ""}
									onClick={() => handleLinkClick(router.pathname, "/")}
								>
									<Logo aria-hidden="true" />
									<span className="sr-only">Home</span>
								</a>
							</Link>
						</ListItem>

						<ListItem>
							<Link href="/projects" passHref>
								<a
									className={router.pathname == "/projects" ? "active" : ""}
									onClick={() => handleLinkClick(router.pathname, "/projects")}
								>
									Projects
								</a>
							</Link>
						</ListItem>

						<ListItem>
							<Link href="/about" passHref>
								<a
									className={router.pathname == "/about" ? "active" : ""}
									onClick={() => handleLinkClick(router.pathname, "/about")}
								>
									About
								</a>
							</Link>
						</ListItem>

						<ListItem>
							<Link href="/contact" passHref>
								<a
									className={router.pathname == "/contact" ? "active" : ""}
									onClick={() => handleLinkClick(router.pathname, "/contact")}
								>
									Contact
								</a>
							</Link>
						</ListItem>

						<ListItem className="theme-btn">{children}</ListItem>
					</List>
					<NavToggle
						onClick={handleToggle}
						className={isNavActive ? "active" : null}
						aria-label="Toggle navigation"
					>
						{isNavActive ? <Close /> : <Menu />}
					</NavToggle>
				</NavbarInner>
			</Container>
		</Navbar>
	);
};

export default Nav;
