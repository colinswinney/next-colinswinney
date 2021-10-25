import styled from "styled-components";
import { vars } from "../../../../styles/global-styles";

export const CloseEl = styled.svg`
	fill: ${({ theme }) => theme.linkColor};
	height: 2rem;
	width: 2rem;

	&:hover {
		fill: ${({ theme }) => theme.linkColorHover};
	}

	@media (min-width: ${vars.breakpoint}) {
		height: 2.5rem;
		width: 2.5rem;
	}
`;
