import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	JumbotronEl,
	Container,
	Heading,
	SubHeading,
	ButtonWrap,
	Button,
    RightSide
} from "./styles/jumbotron";

export default function Jumbotron({ children, ...restProps }) {

	return <JumbotronEl {...restProps}>{children}</JumbotronEl>;
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Heading = function JumbotronTitle({ children, ...restProps }) {

    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, x: "-50px"},
        visible: {
            opacity: 1,
            x: "0",
            transition: {
                duration: 0.5,
            },
        },
    };
	return (
		<Heading
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={variants}
			{...restProps}
		>
			{children}
		</Heading>
	);
};

Jumbotron.SubHeading = function JumbotronSubTitle({ children, ...restProps }) {

    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, x: "-50px" },
        visible: {
            opacity: 1,
            x: "0",
            transition: {
                duration: 0.5,
            },
        },
    };
	return (
		<SubHeading
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={variants}
			{...restProps}
		>
			{children}
		</SubHeading>
	);
};

Jumbotron.ButtonWrap = function JumbotronButtonWrap({children, ...restProps }) {

    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, x: "-50px" },
        visible: {
            opacity: 1,
            x: "0",
            transition: {
                duration: 0.5,
            },
        },
    };

	return (
		<ButtonWrap
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={variants}
			{...restProps}
		>
			{children}
		</ButtonWrap>
	);
};

Jumbotron.Button = function JumbotronButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Jumbotron.RightSide = function JumbotronRightSide({ children, ...restProps }) {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, x: "50px" },
        visible: {
            opacity: 1,
            x: "0",
            transition: {
                duration: 0.5,
            },
        },
    };
	return (
		<RightSide
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={variants}
			{...restProps}
		>
			{children}
		</RightSide>
	);
};
