import styled from "styled-components";
import { c } from "../../../../styles/colors";
import { ImageWrapEl } from "../../../image-wrap/styles/image-wrap";
import {
	vars,
	GridContainer,
	FlexContainer,
} from "../../../../styles/global-styles";

export const AboutSectionWrap = styled.section`
	display: flex;
	text-align: center;

	@media (min-width: ${vars.breakpoint}) {
		min-height: 100vh;
	}
`;

export const AboutSectionInner = styled.div`
	margin: auto;
	width: 100%;
`;

export const Text = styled.p`
	font-family: ${vars.fontBody};
	margin: 0 auto 1rem;
	font-size: clamp(1.25rem, 1vw + 1.25rem, 3rem);
	font-weight: 100;
	line-height: 1.5;
`;

export const BottomText = styled(Text)`
	margin: 4rem auto 2rem;
	font-size: clamp(1rem, 0.5vw + 1rem, 2rem);
	max-width: 25ch;
`;

export const GridContainerAbout = styled(GridContainer)`
	row-gap: 3vw;
	grid-template-areas:
		"a b c d e f"
		"g h i j k l";
`;

export const ImageWrapGrid = styled(ImageWrapEl)`
	margin: auto;
	width: clamp(2rem, 2rem + 4vw, 4rem);
	height: clamp(2rem, 2rem + 4vw, 4rem);
	grid-area: ${(props) => props.gridArea};
	filter: grayscale(1) brightness(0.5);
	transition: ${vars.transition};

	&.active-item {
		filter: grayscale(0) brightness(1);
	}
`;

export const LoopTextWrap = styled.div`
	position: relative;
	height: clamp(2rem, 7vw, 4rem);
	width: 100%;
`;

export const LoopTextHeading = styled.h2`
	position: absolute;
	height: 100%;
	width: 100%;
	opacity: 0;
	transition: ${vars.transition};
	margin: auto;
	font-size: clamp(2.5rem, 7vw, 4rem);

	&.active-item {
		opacity: 1;
	}
`;
