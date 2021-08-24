import { Container } from '../../styles/global-styles'
import { MainEl } from './styles/main'

const Main = ({ children }) => {
    return (
        <MainEl>
                { children }
        </MainEl>
    )
}

export default Main