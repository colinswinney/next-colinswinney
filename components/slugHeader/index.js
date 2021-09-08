import { Header, SlugHeaderContainer, HeadingOne, Triangle } from './styles/slugHeader'
import { GradientText } from '../../styles/global-styles'

const SlugHeader = ({ children, title }) => {
    return (
        <Header>
            <SlugHeaderContainer>
                <HeadingOne><GradientText>{ title }</GradientText></HeadingOne>
                { children }
            </SlugHeaderContainer>
            <Triangle/>
        </Header>
        
    )
}

export default SlugHeader