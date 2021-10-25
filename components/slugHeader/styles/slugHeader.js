import styled from "styled-components";
import { ImageWrapEl } from "../../image-wrap/styles/image-wrap";
import { vars } from "../../../styles/global-styles";

export const Header = styled.header`
	text-align: center;
	margin: 0 auto;

	${ImageWrapEl} {
		max-width: 30rem;
		margin: auto;
		display: block;
	}
`;

export const HeadingOne = styled.h1`
	margin: 2rem auto;
	border: 0.5rem solid ${({ theme }) => theme.headingColor};
	padding: 2rem 0.5rem;

	@media (min-width: ${vars.breakpoint}) {
		font-size: 5rem;
		padding: 4rem 1rem;
		border-width: 1rem;
	}
`;
