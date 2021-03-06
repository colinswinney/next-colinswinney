import { FlexContainer, GradientText } from "../../../styles/global-styles";
import {
	LogoSectionWrap,
	LogoSectionInner,
	TextWrap,
} from "./styles/logo-section";
import ImageWrap from "../../image-wrap";

const LogoSection = ({ children, logos }) => {
	const logosArray = Object.values(logos);

	return (
		<LogoSectionWrap>
			<LogoSectionInner>
				<FlexContainer>
					<TextWrap>
						<h2>
							<GradientText>Clients</GradientText>
						</h2>
						<p>
							It&apos;s been my pleasure to work with these
							Wisconsin area companies.
						</p>
					</TextWrap>

					{logosArray.map((logo) => (
						<ImageWrap
							key={logo.title}
							imageObj={logo}
							transparent
							grayscale
						/>
					))}
				</FlexContainer>
			</LogoSectionInner>
		</LogoSectionWrap>
	);
};

export default LogoSection;
