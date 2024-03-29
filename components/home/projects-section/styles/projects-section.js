import styled from "styled-components";
import {
	vars,
	FlexContainer,
	GridContainer,
} from "../../../../styles/global-styles";

export const ProjectsSectionWrap = styled.section`
	padding-left: 0;
	padding-right: 0;
	display: flex;
	background-image: ${({ theme }) => theme.aboutSectionBg};
	background-size: 2rem 2rem;
	background-position: center;
	border-top: 0.0625rem solid ${({ theme }) => theme.aboutSectionBorderColor};
	border-bottom: 0.0625rem solid
		${({ theme }) => theme.aboutSectionBorderColor};

	@media (min-width: ${vars.breakpoint}) {
		min-height: 100vh;
	}
`;

export const ProjectsSectionInner = styled.div`
	margin: auto;
	width: 100%;
`;

export const FlexBar = styled(FlexContainer)`
	padding: 0 1rem;
	position: relative;
	text-align: center;
	justify-content: center;

	a {
		display: inline-flex;
	}

	&.bottom {
		margin-top: -1rem;
		z-index: 1;
	}
`;

export const Heading = styled.h2`
	margin-bottom: 0;
`;

export const Text = styled.p``;

export const GridContainerProjects = styled(GridContainer)`
	padding-top: 0;
	padding-bottom: 0;
	margin-bottom: 2rem;
	font-size: 1.33rem;
	text-align: center;
	grid-template-columns: repeat(4, minmax(1fr));
	grid-template-areas:
		"a a e e"
		"a a b b"
		"f f b b"
		"c c g g"
		"c c d d"
		"h h d d";

	@media (min-width: ${vars.breakpoint}) {
		font-size: 1.77rem;
	}

	@media (min-width: ${vars.breakpointLarge}) {
		grid-template-columns: repeat(4, 12.5%);
		grid-template-areas:
			"a a e e c c g g"
			"a a b b c c d d"
			"f f b b h h d d";
	}
`;

export const Cell = styled.div`
	background-image: url("${(props) => props.bgImg}");
	background-size: cover;
	background-position: center;
	border: 0.0625rem solid ${({ theme }) => theme.bodyBgColor};
	height: 10rem;
	width: 100%;

	&.tall {
		height: 20rem;
		width: 100%;
	}

	&.a {
		grid-area: a;
	}

	&.b {
		grid-area: b;
	}

	&.c {
		grid-area: c;
	}

	&.d {
		grid-area: d;
	}

	&.e {
		grid-area: e;
	}

	&.f {
		grid-area: f;
	}

	&.g {
		grid-area: g;
	}

	&.h {
		grid-area: h;
	}
`;

export const ProjectAnchor = styled.a`
	width: 100%;
	padding: 1rem;
	height: 100%;
	display: flex;
	align-items: center;
	position: relative;
	background: ${({ theme }) => theme.blobColor};
	font-family: ${vars.fontHeading};
	text-align: center;
	line-height: 1;
	opacity: 0;
	transition: ${vars.transition};

	&:after {
		content: "${(props) => props.afterTitle}";
		padding: 0 0.5rem;
		position: absolute;
		overflow-wrap: break-word;
		left: 0;
		right: 0;
	}

	&:hover,
	&:focus {
		opacity: 1;
		color: ${vars.dark};
	}
`;
