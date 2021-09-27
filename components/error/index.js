import Link from 'next/link'
import { ErrorMain } from './styles/error'

const Error = () => {
    return (
        <ErrorMain>
            <div>
                <h1>Oh no, a 404!</h1>
                <p>You should probably head <Link href="/" passHref><a>back home</a></Link>.</p>
            </div>
        </ErrorMain>
    )
}

export default Error