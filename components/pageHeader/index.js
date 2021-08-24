import { Header, HeadingOne, Triangle } from './styles/pageHeader'
import { Container } from '../../styles/global-styles'

const PageHeader = ({ children, title }) => {
    return (
        <Header>
            <Container>
                <HeadingOne>{ title }</HeadingOne>
                { children }
            </Container>
            <Triangle/>
        </Header>
        
    )
}

export default PageHeader