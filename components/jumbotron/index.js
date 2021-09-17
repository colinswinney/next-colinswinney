import React from "react"
import { JumbotronEl, Container, Heading, SubHeading, ButtonWrap } from "./styles/jumbotron"

export default function Jumbotron({ children, ...restProps }) {

    return (

        <JumbotronEl {...restProps}>
            {children}
        </JumbotronEl>
        
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

Jumbotron.ButtonWrap = function JumbotronButtonWrap( { children, ...restProps } ) {
    return <ButtonWrap {...restProps}>{children}</ButtonWrap>
}