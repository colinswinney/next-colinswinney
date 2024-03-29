import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { c } from "./colors";

export const vars = {
	light: `#fafafa`,
	dark: `#121212`,
	textGrey: c.bluegrey800,
	fontBody: `'Poppins', Helvetica, Arial, sans-serif`,
	fontHeading: `'Work Sans', Helvetica, Arial, sans-serif`,
	transition: `0.2s ease`,
	breakpointSmall: `30rem`,
	breakpoint: `45rem`,
	breakpointLarge: `62.5rem`,
};

export const lightTheme = {
	bodyBgColor: `#fafafa`,
	bodyBgColorLight: `#fff`,
	headingColor: c.bluegrey800,
	textColor: c.bluegrey800,
	textAccent: c.bluegrey700,
	accentColorOne: c.indigo300,
	accentColorTwo: c.indigo800,
	linkColor: c.indigo600,
	linkColorHover: c.lightblue300,
	blobColor: c.orange200,
	guitarFillOne: c.indigo800,
	guitarFillTwo: c.deeporangeA700,
	guitarFillThree: `#470326`,
	contactFormBg: `rgba(255,255,255, 0.95)`,
	contactImgBg: `/images/milwaukee-daylight.jpeg`,
	gradient: `linear-gradient(30deg, ${c.indigo800}, ${c.indigo300})`,
	jumboGradient: `linear-gradient(135deg, ${c.blue200}, ${c.blue50})`,
	themeButtonGradientHover: `linear-gradient(30deg, ${c.indigo300}, ${c.indigo300})`,
	aboutSectionBorderColor: `rgba(232, 234, 246, .3)`,
	aboutSectionBg: `linear-gradient(rgba(232, 234, 246, .3) .1em, transparent .1em), linear-gradient(90deg, rgba(232, 234, 246, .3) .1em, transparent .1em)`,
	logoSectionBg: c.grey100,
	homeImg: "/images/headers/blob-home.png",
	aboutImg: "/images/headers/blob-me.png",
	projectsImg: "/images/headers/blob-screamer.png",
	contactImg: "/images/headers/blob-telephone.png",
	techStackBtn: c.bluegrey50,
	invert: `0`,
	giraffe: c.indigo900,
};

export const darkTheme = {
	bodyBgColor: `#121212`,
	bodyBgColorLight: c.grey900,
	headingColor: c.grey200,
	textColor: c.grey300,
	textAccent: c.grey300,
	accentColorOne: c.purple300,
	accentColorTwo: c.purple600,
	linkColor: c.purple300,
	linkColorHover: c.deeppurple100,
	blobColor: c.teal200,
	guitarFillOne: c.purple800,
	guitarFillTwo: c.pink500,
	guitarFillThree: c.grey200,
	contactFormBg: `rgba(33,33,33, 0.95)`,
	contactImgBg: `/images/milwaukee-night.jpeg`,
	gradient: `linear-gradient(30deg, ${c.purple600}, ${c.purple200})`,
	jumboGradient: `linear-gradient(135deg, #2A0B32, #470326)`,
	themeButtonGradientHover: `linear-gradient(30deg, ${c.purple200}, ${c.purple200})`,
	aboutSectionBorderColor: `rgba(55, 55, 55, .1)`,
	aboutSectionBg: `linear-gradient(rgba(55, 55, 55, .1) .1em, transparent .1em), linear-gradient(90deg, rgba(55, 55, 55, .1) .1em, transparent .1em);`,
	logoSectionBg: c.grey900,
	homeImg: "/images/headers/blob-home-dark.png",
	aboutImg: "/images/headers/blob-me-dark.png",
	projectsImg: "/images/headers/blob-screamer-dark.png",
	contactImg: "/images/headers/blob-telephone-dark.png",
	techStackBtn: c.grey800,
	invert: `1`,
	giraffe: c.purple400,
};

export const GlobalStyles = createGlobalStyle`

    @keyframes guitarBody {
        0% {
            fill: ${({ theme }) => theme.guitarFillOne};
        }
        30% {
            fill: ${({ theme }) => theme.guitarFillOne};
        }
        33% {
            fill: ${({ theme }) => theme.guitarFillTwo};
        }
        63% {
            fill: ${({ theme }) => theme.guitarFillTwo};
        }
        66% {
            fill: ${({ theme }) => theme.guitarFillThree};
        }
        97% {
            fill: ${({ theme }) => theme.guitarFillThree};
        }
        100% {
            fill: ${({ theme }) => theme.guitarFillOne};
        }
    }

    html,
    body {
        font-size: 100%;
        font-family: -apple-system,system-ui,blinkmacsystemfont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif;
    }

    body {
        background: ${({ theme }) => theme.bodyBgColor};
        color: ${({ theme }) => theme.textColor};
        font-family: ${vars.fontBody};
        position: relative;
        font-size: 1rem;
    }

    body.nav-menu-active {
        overflow: hidden;
    }

    * {
        box-sizing: border-box;
    }

    ::-moz-selection {
        color: black;
        background-image: none;
        -webkit-background-clip: initial;
        -moz-background-clip: initial;
		background-clip: text;
        -webkit-text-fill-color: initial;
        -moz-text-fill-color: initial;
        background: ${({ theme }) => theme.blobColor};
    }

    ::selection {
        color: black;
        background-image: none;
        -webkit-background-clip: initial;
        -moz-background-clip: initial;
		background-clip: text;
        -webkit-text-fill-color: initial;
        -moz-text-fill-color: initial;
        background: ${({ theme }) => theme.blobColor};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        line-height: 1;
        font-family: ${vars.fontHeading};
        color: ${({ theme }) => theme.headingColor};
    }

    h1 {
        font-size: 3.15rem;
    }

    h2 {
        font-size: 2.36rem;
    }

    h3 {
        font-size: 1.77rem;
    }

    h4 {
        font-size: 1.33rem;
    }

    h5 {
        font-size: 1rem;
    }

    h6 {
        font-size: 0.8rem;
    }

    @media (min-width: ${vars.breakpoint}) {
        body {
            font-size: 1.2rem;
        }

        h1 {
            font-size: 4.2rem;
        }

        h2 {
            font-size: 3.15rem;
        }

        h3 {
            font-size: 2.36rem;
        }

        h4 {
            font-size: 1.77rem;
        }

        h5 {
            font-size: 1.33rem;
        }

        h6 {
            font-size: 1rem;
        }
    }

    p, ul, ol {
        margin-bottom: 2.5rem;
        line-height: 2;
    }

    a {
        color: ${({ theme }) => theme.linkColor};
        text-decoration: none;
        font-weight: 700;

		&.no-hover-decoration {
			&:hover,
			&:focus {
				text-decoration: none;
			}
		}

        &:hover,
		&:focus-visible {
            color: ${({ theme }) => theme.linkColorHover};
            text-decoration: underline;
            cursor: pointer;
        }

        &:focus {
            outline: .25rem solid ${({ theme }) => theme.linkColor};
            outline-offset: .5rem;
        }
    }

    button:focus {
        outline: .25rem solid ${({ theme }) => theme.linkColor};
        outline-offset: .5rem;
    }

    section {
        padding: 5rem 1rem;
    }

    img {
        max-width: 100%;
    }

    figure {
        margin: 3rem auto 2.5rem;
        padding: 0;
        max-width: 95%;
        text-align: center;
        font-size: .75rem;
        width: auto !important;

        @media (min-width: ${vars.breakpoint}) {
            font-size: 1rem;
        }
    }

    figure img {
        margin: auto auto .5rem;
        height: auto !important;
        max-width: 100%;
    }

    strong {
        font-weight: bold;
    }

	.sr-only {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
`;

export const ThemeButton = styled.button`
	border: none;
	border-radius: 100%;
	background: none;
	cursor: pointer;
	position: relative;

	&:after {
		position: absolute;
		content: "theme";
		text-transform: uppercase;
		font-size: 0.625rem;
		margin: auto;
		bottom: -0.5rem;
		left: 0;
		right: 0;
		color: #999;
	}
`;

export const Container = styled.div`
	margin: auto;
	padding: 1rem;
	width: 100%;
	max-width: 75rem;
`;

export const FlexContainer = styled(Container)`
	display: flex;
`;

export const GridContainer = styled(Container)`
	display: grid;
`;

export const GradientText = styled.span`
	background-color: ${({ theme }) => theme.accentColorOne};
	background-image: ${({ theme }) => theme.gradient};
	background-size: 100%;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
`;

export const AnchorButton = styled.span`
	padding: 0.5rem 1.5rem;
	width: max-content;
	font-size: 1rem;
	font-weight: 700;
	box-sizing: content-box;
	position: relative;
	text-transform: uppercase;
	letter-spacing: 0.05em;

	@media (min-width: ${vars.breakpoint}) {
		font-size: 1.2rem;
	}

	&:hover {
		text-decoration: none;
	}
`;

export const AnchorButtonGradient = styled(AnchorButton)`
	color: ${vars.light};
	background: ${({ theme }) => theme.gradient};

	&:before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: ${({ theme }) => theme.gradient};
		z-index: -1;
	}

	&:after {
		content: "";
		position: absolute;
		top: 0.125rem;
		right: 0.125rem;
		bottom: 0.125rem;
		left: 0.125rem;
		background: ${({ theme }) => theme.bodyBgColor};
		z-index: -1;
	}

	@media (min-width: ${vars.breakpoint}) {
		font-size: 1.2rem;
	}

	&:hover {
		background-color: ${({ theme }) => theme.accentColorOne};
		background-image: ${({ theme }) => theme.gradient};
		background-size: 100%;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
	}
`;

export const AnchorButtonHomeJumbo = styled(AnchorButton)`
	background: ${({ theme }) => theme.linkColor};
	color: ${vars.light};
	border: 0.125rem solid ${({ theme }) => theme.linkColor};

	&:hover {
		color: ${({ theme }) => theme.linkColor};
		border-color: ${({ theme }) => theme.linkColor};
		background: transparent;
	}
`;
