import Link from "next/link";
import { FooterEl, FlexContainerFooter, Text, IconWrap } from "./styles/footer";
import LinkedIn from "../svg/linkedin";
import GitHub from "../svg/github";
import Codepen from "../svg/codepen";

const Footer = () => {
	return (
		<FooterEl>
			<FlexContainerFooter>
				<Text>
					&copy; Copyright {new Date().getFullYear()}, Colin Swinney{" "}
				</Text>
				<IconWrap>
					<Link
						href="https://www.linkedin.com/in/colin-swinney/"
						passHref
					>
						<a>
							<LinkedIn />
						</a>
					</Link>
				</IconWrap>
				<IconWrap>
					<Link href="https://github.com/colinswinney" passHref>
						<a>
							<GitHub />
						</a>
					</Link>
				</IconWrap>
				<IconWrap>
					<Link href="https://codepen.io/colinswinney" passHref>
						<a>
							<Codepen />
						</a>
					</Link>
				</IconWrap>
			</FlexContainerFooter>
		</FooterEl>
	);
};

export default Footer;
