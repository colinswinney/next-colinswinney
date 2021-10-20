import { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import "../normalize.css";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
import Nav from "../components/nav";
import Footer from "../components/footer";
import {
	lightTheme,
	darkTheme,
	GlobalStyles,
	ThemeButton,
} from "../styles/global-styles";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	const [isMounted, setIsMounted] = useState(false);
	const darkmode = useDarkMode(true);
	const theme = darkmode.value ? darkTheme : lightTheme;

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		router.events.on("routeChangeComplete", () => {
			document.activeElement.blur();
		});
	}, [router.events]);

	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>Colin Swinney | Web Developer</title>
			</Head>
			<GlobalStyles />
			<Nav>
				<ThemeButton onClick={darkmode.toggle}>
					{!darkmode.value ? (
						<span className="material-icons light">dark_mode</span>
					) : (
						<span className="material-icons dark">wb_sunny</span>
					)}
				</ThemeButton>
			</Nav>
			{isMounted && <Component {...pageProps} />}
			<Footer />
			<Script src="https://cdn.polyfill.io/v2/polyfill.js?features=Element.prototype.classList"></Script>
			<Script src="https://unpkg.com/focus-visible"></Script>
		</ThemeProvider>
	);
}
export default MyApp;
