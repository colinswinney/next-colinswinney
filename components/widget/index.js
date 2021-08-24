import { WidgetWrapper, Heading } from './styles/widget'

export default function Widget({ children, ...restProps }) {

    return (

        <WidgetWrapper {...restProps}>
            {children}
        </WidgetWrapper>
        
    )
}

Widget.Heading = function WidgetHeading( { children, ...restProps } ) {
    return <Heading {...restProps}>{children}</Heading>
}