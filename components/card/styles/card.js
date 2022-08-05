import styled from "styled-components";
import { vars, AnchorButtonGradient } from "../../../styles/global-styles";
import { motion } from "framer-motion";

export const CardWrap = styled(motion.div)`
	padding: 0.375rem 0;
	margin: 3rem auto 6rem;
	max-width: 31.25rem;
	text-align: center;
	background: ${({ theme }) => theme.gradient};
	box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.12),
		0 0.0625rem 0.125rem rgba(0, 0, 0, 0.24);
	border-radius: 0.5rem;
	overflow: hidden;
	position: relative;
	display: grid;
	grid-template-areas:
		"image"
		"info";

	@media (min-width: ${vars.breakpoint}) {
		margin: 3rem 1rem 6rem;
		max-width: none;
		grid-template-columns: 40% 60.01%;
		grid-template-areas: "image info";

		&.even {
			grid-template-columns: 60.01% 40%;
			grid-template-areas: "info image";
		}
	}
`;

export const ImageDiv = styled.div`
	min-height: 15rem;
	width: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url("${(props) => props.bgImg}");
	grid-area: image;
`;

export const Info = styled.div`
	padding: 0 1rem;
	width: 100%;
	min-height: 6.25rem;
	background: ${({ theme }) => theme.bodyBgColorLight};
	box-sizing: border-box;
	position: relative;
	z-index: 1;
	grid-area: info;
`;

export const Title = styled.h3`
	margin: 2rem 0;
`;

export const Summary = styled.p`
	margin: 0 0 3rem;
	line-height: 1.5;
`;

export const ReadMore = styled(AnchorButtonGradient)`
	&:after {
		background: ${({ theme }) => theme.bodyBgColorLight};
	}
`;

export const TechList = styled.ul`
	margin: 3rem 0 0;
	padding: 1rem 0;
	width: 100%;
	list-style-type: none;
	border-top: 0.0625rem solid ${({ theme }) => theme.techStackBtn};
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1rem;
`;

export const TechListItem = styled.li`
	padding: 0.25rem 0.75rem;
	font-size: 0.8rem;
	background: ${({ theme }) => theme.techStackBtn};
`;
