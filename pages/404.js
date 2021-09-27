import Link from 'next/link'
import Main from '../components/main'
import { Container } from '../styles/global-styles';

const ErrorPage = () => {
    return (
        <Main>
            <Container>
                <h1>Oh no, a 404!</h1>
                <p>Sorry, this page doesn't exist, you should probably <Link to="/" passHref><a>head home</a></Link>.</p> 
            </Container>
        </Main>
    )
}

export default ErrorPage