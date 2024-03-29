import styled from "styled-components";
import {
	vars,
	GridContainer,
	AnchorButtonHomeJumbo,
} from "../../../styles/global-styles";
import { motion } from "framer-motion";

export const JumbotronEl = styled.header`
	min-height: calc(100vh - 5.75rem);
	padding: 1rem 0;
	display: flex;
	align-content: center;
	justify-content: center;
	background: ${({ theme }) => theme.jumboGradient};
`;

export const Container = styled(GridContainer)`
	margin-top: 4rem;
	text-align: center;
	grid-template-areas:
		"title"
		"text"
		"button"
		"image";

	@media (min-width: ${vars.breakpoint}) {
		margin-top: auto;
		text-align: left;
		grid-template-columns: 1fr 2rem 1fr;
		grid-template-areas:
			". . image"
			"title . image"
			"text . image"
			"button . image"
			". . image";
	}
`;

export const Heading = styled(motion.h1)`
	margin: 0;
	grid-area: title;
	color: ${({ theme }) => theme.headingColor};
`;

export const SubHeading = styled(motion.h2)`
	margin: 1.25rem auto 0;
	max-width: 35ch;
	font-family: ${vars.fontBody};
	font-weight: 200;
	font-size: 1.33rem;
	line-height: 1.5;
	color: ${({ theme }) => theme.textAccent};
	grid-area: text;

	@media (min-width: ${vars.breakpoint}) {
		font-size: 1.77rem;
		margin: 2rem 0 2.5rem;
	}
`;

export const ButtonWrap = styled(motion.div)`
	z-index: 1;
	grid-area: button;

	${AnchorButtonHomeJumbo} {
		display: inline-flex;
		margin: 1.5rem auto 2rem;
	}

	@media (min-width: ${vars.breakpoint}) {
		${AnchorButtonHomeJumbo} {
			margin: 0;
		}
	}

	&:focus {
		outline: .25rem solid ${({ theme }) => theme.linkColor};
		outline-offset: .5rem;
	}
`;
export const RightSide = styled(motion.div)`
	margin-top: 1rem;
	width: 100%;
	grid-area: image;
	justify-self: flex-end;

	@media (min-width: ${vars.breakpoint}) {
		margin-top: 0;
		max-width: 500px;
	}
`;
