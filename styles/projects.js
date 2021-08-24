import styled from 'styled-components'
import { Container } from './global-styles'
import { MainEl } from '../components/main/styles/main'
import { BlobScreamerEl } from '../components/svg/blob-screamer/styles/blob-screamer'
import { ScreamerEl } from '../components/svg/screamer/styles/screamer'

export const Header = styled.header`
    position: relative;

    ${Container} {
        position: relative;
    }

    ${BlobScreamerEl}{
        position: absolute;
        width: 50rem;
        top: 0;
        right: 0;
    }

    ${ScreamerEl} {
        width: 25%;
        position: absolute;
        top: 0;
        right: 0;
        transform: rotate(5deg);
    }
`

export const FlexMain = styled(MainEl)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1000px;
    margin: auto;
    padding: 2rem 0;

    a {
        font-weight: bold;
        display: block;
        color: ${({ theme }) => theme.linkColor};

        &:hover {
            color: color: ${({ theme }) => theme.linkColorHover};
        }
    }
`