import styled from "styled-components";
import { vars } from "../../../../styles/global-styles";

export const WrenchEl = styled.svg`
	width: 0.8rem;
	height: 0.8rem;
	position: absolute;
	margin: auto;
	left: 0;
	top: 0.5rem;

	@media (min-width: ${vars.breakpoint}) {
		top: 0.75rem;
	}
`;
