import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	Container,
	GradientText,
	AnchorButtonGradient,
} from "../../../styles/global-styles";
import {
	AboutSectionWrap,
	AboutSectionInner,
	GridContainerAbout,
	ImageWrapGrid,
	Text,
	LoopTextWrap,
	LoopTextHeading,
	BottomText,
} from "./styles/about-section";

const AboutSection = () => {
	const images = [
		{
			title: "HTML",
			path: "/images/about-logos/html5.png",
			alt: "HTML5 Logo",
			gridArea: "a",
		},
		{
			title: "CSS",
			path: "/images/about-logos/css3.png",
			alt: "CSS3 Logo",
			gridArea: "b",
		},
		{
			title: "JavaScript",
			path: "/images/about-logos/javascript.png",
			alt: "JavaScript Logo",
			gridArea: "c",
		},
		{
			title: "React",
			path: "/images/about-logos/react.png",
			alt: "React Logo",
			gridArea: "d",
		},
		{
			title: "Next.js",
			path: "/images/about-logos/next.png",
			alt: "Next Logo",
			gridArea: "e",
		},
		{
			title: "php",
			path: "/images/about-logos/php-elephant.png",
			alt: "php Logo",
			gridArea: "f",
		},
		{
			title: "WordPress",
			path: "/images/about-logos/wordpress.png",
			alt: "WordPress Logo",
			gridArea: "g",
		},
		{
			title: "WooCommerce",
			path: "/images/about-logos/woocommerce.png",
			alt: "WooCommerce Logo",
			gridArea: "h",
		},
		{
			title: "Shopify",
			path: "/images/about-logos/shopify.png",
			alt: "Shopify Logo",
			gridArea: "i",
		},
		{
			title: "Adobe CC",
			path: "/images/about-logos/adobe.png",
			alt: "Adobe Logo",
			gridArea: "j",
		},
		{
			title: "Affinity",
			path: "/images/about-logos/affinity.png",
			alt: "Affinity Logo",
			gridArea: "k",
		},
		{
			title: "Git",
			path: "/images/about-logos/git.png",
			alt: "Git Logo",
			gridArea: "l",
		},
	];

	useEffect(() => {
		let texts = document.querySelectorAll(".cycle-text");
		let imgs = document.querySelectorAll(".cycle-img");
		let prevText = null;
		let prevImg = null;
		let animateText = (currText, currTextIndex) => {
			let indexText = (currTextIndex + 1) % texts.length;
			if (prevText) {
				prevText.classList.remove("active-item");
			}
			currText.classList.add("active-item");
			prevText = currText;

			setTimeout(() => {
				animateText(texts[indexText], indexText);
			}, 1750);
		};
		animateText(texts[0], 0);

		let animateImg = (currImg, currImgIndex) => {
			let indexImg = (currImgIndex + 1) % imgs.length;
			if (prevImg) {
				prevImg.classList.remove("active-item");
			}
			currImg.classList.add("active-item");
			prevImg = currImg;

			setTimeout(() => {
				animateImg(imgs[indexImg], indexImg);
			}, 1750);
		};
		animateImg(imgs[0], 0);
	}, []);

	return (
		<AboutSectionWrap>
			<AboutSectionInner>
				<Container>
					<Text>
						I really <strong>love</strong> working with
					</Text>
					<LoopTextWrap className="loop-text">
						{images.map((image) => (
							<LoopTextHeading
								key={image.title}
								className="cycle-text"
							>
								<GradientText>{image.title}</GradientText>
							</LoopTextHeading>
						))}
					</LoopTextWrap>
				</Container>

				<GridContainerAbout>
					{images.map((image) => (
						<ImageWrapGrid
							key={image.title}
							transparent
							className="cycle-img"
							gridArea={image.gridArea}
						>
							<Image
								src={image.path}
								width={100}
								height={100}
								alt={image.alt}
								priority
							/>
						</ImageWrapGrid>
					))}
				</GridContainerAbout>

				<BottomText>
					I also love old country music and New York style pizza.
				</BottomText>

				<Link href="/about" passHref>
					<a className="no-hover-decoration">
						<AnchorButtonGradient>Find out more</AnchorButtonGradient>
					</a>
				</Link>
			</AboutSectionInner>
		</AboutSectionWrap>
	);
};

export default AboutSection;
