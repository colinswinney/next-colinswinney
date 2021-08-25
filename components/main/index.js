import { MainEl } from './styles/main'

const Main = ({ children, ...restProps }) => {
    return (
        <MainEl {...restProps}>
                { children }
        </MainEl>
    )
}

export default Main