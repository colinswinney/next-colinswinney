import React from "react"
import { motion } from 'framer-motion'
import { JumbotronWrapper, Container, Left, Right, Heading, SubHeading } from "./styles/jumbotron"

export default function Jumbotron({ children, ...restProps }) {

    return (

        <JumbotronWrapper {...restProps}>
            {children}
        </JumbotronWrapper>
        
    )
}

Jumbotron.Container = function JumbotronContainer( { children, ...restProps } ) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Left = function JumbotronLeft( { children, ...restProps } ) {

    const variantsLeft = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }

    return (
        <Left
            // variants={variantsLeft} // Pass the variant object into Framer Motion 
            // initial="hidden" // Set the initial state to variants.hidden
            // animate="enter" // Animated state to variants.enter
            // exit="exit" // Exit state (used later) to variants.exit
            // transition={{ type: 'linear' }} // Set the transition to linear
            // {...restProps}
        >
            {children}
        </Left>
    )
}

Jumbotron.Right = function JumbotronRight( { children, ...restProps } ) {

    const variantsRight = {
        hidden: { opacity: 0, x: 200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 100 },
    }

    return (
        <Right
            // variants={variantsRight} // Pass the variant object into Framer Motion 
            // initial="hidden" // Set the initial state to variants.hidden
            // animate="enter" // Animated state to variants.enter
            // exit="exit" // Exit state (used later) to variants.exit
            // transition={{ type: 'linear' }} // Set the transition to linear
            // className=""
            {...restProps}
        >
            {children}
        </Right>
    )
}

Jumbotron.Heading = function JumbotronTitle( { children, ...restProps } ) {
    return <Heading {...restProps}>{children}</Heading>
}

Jumbotron.SubHeading = function JumbotronSubTitle( { children, ...restProps } ) {
    return <SubHeading {...restProps}>{children}</SubHeading>
}