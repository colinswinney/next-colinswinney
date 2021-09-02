import React from "react"
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

Jumbotron.Heading = function JumbotronTitle( { children, ...restProps } ) {
    return <Heading {...restProps}>{children}</Heading>
}

Jumbotron.SubHeading = function JumbotronSubTitle( { children, ...restProps } ) {
    return <SubHeading {...restProps}>{children}</SubHeading>
}