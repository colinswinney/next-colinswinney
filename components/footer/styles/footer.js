import styled from "styled-components";
import { FlexContainer } from "../../../styles/global-styles";
import { GitHubEl } from "../../svg/github/styles/github";
import { CodepenEl } from "../../svg/codepen/styles/codepen";
import { LinkedInEl } from "../../svg/linkedin/styles/linkedin";

export const FooterEl = styled.footer``;

export const FlexContainerFooter = styled(FlexContainer)`
	align-items: center;
	justify-content: flex-start;
`;

export const Text = styled.small`
	display: flex;
	font-size: 0.75rem;
	width: 100%;
	line-height: 1.5;
`;

export const IconWrap = styled.div`
	margin: 0 0.5rem;
	display: inline-flex;

	a {
		display: inline-flex;
	}

	${GitHubEl},
	${LinkedInEl},
	${CodepenEl} {
		fill: ${({ theme }) => theme.linkColor};

		&:hover {
			fill: ${({ theme }) => theme.linkColorHover};
		}
	}
`;
