import { FlexContainer, HeadingOne } from './styles/pageHeader'

const PageHeader = ({ children, props }) => {
    return (
        <FlexContainer>
            
            <HeadingOne>
                { children }
            </HeadingOne>
        </FlexContainer>
        
    )
}

export default PageHeader