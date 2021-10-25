import styled from "styled-components";
import { vars, FlexContainer } from "./global-styles";

//
//
// projects/[slug]
//
//

export const ProjectsNav = styled.nav`
	padding: 1rem;
	margin: 2rem auto auto;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	max-width: ${vars.breakpointLarge};
`;

export const ProjectsListAnchor = styled.a`
	margin: 0.5rem 1rem 0.5rem 0;
	text-align: center;

	&:nth-child(n + 2) {
		&:before {
			content: "\\2022";
			padding-right: 1rem;
			display: inline-block;
			color: ${({ theme }) => theme.textColor};
		}
	}
`;
