import { Header, SlugHeaderContainer, HeadingOne, Triangle } from './styles/slugHeader'

const SlugHeader = ({ children, title }) => {
    return (
        <Header>
            <SlugHeaderContainer>
                <HeadingOne>{ title }</HeadingOne>
                { children }
            </SlugHeaderContainer>
            <Triangle/>
        </Header>
        
    )
}

export default SlugHeader