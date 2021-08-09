import { Container } from '../../global-styles'
import { MainEl } from './styles/main'

const Main = ({ children }) => {
    return (
        <MainEl>
            <Container>
                { children }
            </Container>
        </MainEl>
    )
}

export default Main