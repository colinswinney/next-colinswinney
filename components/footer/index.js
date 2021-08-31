import { FooterEl, FlexContainerFooter, Text } from './styles/footer'

const Footer = () => {
    return (
        <FooterEl>
            <FlexContainerFooter>
                <Text>&copy; Copyright {(new Date().getFullYear())}, Colin Swinney </Text>
            </FlexContainerFooter>
        </FooterEl>
    )
}

export default Footer