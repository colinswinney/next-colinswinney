import { Header, HeadingOne } from "./styles/slugHeader";
import { Container } from "../../styles/global-styles";

const SlugHeader = ({ children, title }) => {
	return (
		<Header>
			<Container>
				<HeadingOne>{title}</HeadingOne>

				{children}
			</Container>
		</Header>
	);
};

export default SlugHeader;
