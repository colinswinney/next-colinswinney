import { WidgetWrapper, Heading, List, ListItem, Icon, AddressWrap } from './styles/widget'

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

Widget.List = function WidgetList( { children, ...restProps } ) {
    return <List {...restProps}>{children}</List>
}

Widget.ListItem = function WidgetListItem( { children, ...restProps } ) {
    return <ListItem {...restProps}>{children}</ListItem>
}

Widget.Icon = function WidgetIcon( { children, ...restProps } ) {
    return <Icon {...restProps}>{children}</Icon>
}

Widget.AddressWrap = function WidgetAddressWrap( { children, ...restProps } ) {
    return <AddressWrap {...restProps}>{children}</AddressWrap>
}