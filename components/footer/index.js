import Link from 'next/link'
import { FooterEl, FlexContainerFooter, Text, IconWrap } from './styles/footer'
import LinkedIn from '../svg/linkedin'
import GitHub from '../svg/github'

const Footer = () => {
    return (
        <FooterEl>
            <FlexContainerFooter>
                <IconWrap>
                    <Link href="https://www.linkedin.com/in/colin-swinney/" passHref>
                        <a>
                            <LinkedIn/>
                        </a>
                    </Link>
                </IconWrap>
                <IconWrap>
                    <Link href="https://github.com/colinswinney" passHref>
                        <a>
                            <GitHub/>
                        </a>
                    </Link>
                </IconWrap>
                <Text>&copy; Copyright {(new Date().getFullYear())}, Colin Swinney </Text>
            </FlexContainerFooter>
        </FooterEl>
    )
}

export default Footer