import styled from "styled-components";
import { vars } from "../../../styles/global-styles";

export const WidgetEl = styled.div`
	margin-top: 0;
	margin-bottom: 3rem;
	word-wrap: break-word;
	overflow-wrap: anywhere;
	white-space: normal;
	grid-area: ${(props) => props.gridArea};

	&:last-of-type {
		margin-bottom: 0;
	}
`;

export const Heading = styled.h4`
	margin: 0 0 1rem;
	font-weight: 200;
	font-family: ${vars.fontBody};
`;

export const List = styled.ul`
	padding-left: 0;
	margin: 0;
	list-style-type: none;
`;

export const ListItem = styled.li`
	padding-left: 1.0625rem;
	position: relative;
`;

export const Icon = styled.span`
	font-size: 0.8rem !important;
`;

export const AddressWrap = styled.div`
	position: relative;
	padding-left: 1.0625rem;
	font-weight: bold;

	${Icon} {
		position: absolute;
		margin: auto;
		left: 0;
		top: 0.125rem;

		@media (min-width: ${vars.breakpoint}) {
			top: 0.3175rem;
		}
	}
`;

export const Text = styled.p`
	line-height: 1.4;
	margin: 0;
`;
