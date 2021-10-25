import styled from "styled-components";

export const ImageWrapEl = styled.div`
	background-color: ${(props) =>
		props.transparent ? "transparent" : `#fafafa`};
	filter: ${(props) => (props.grayscale ? "grayscale(100%)" : "none")};
	padding: 0.25rem;
	display: inline-block;
	max-width: ${(props) => props.maxWidth};
	font-size: 0;
`;
