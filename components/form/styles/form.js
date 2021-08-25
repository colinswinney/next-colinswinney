import styled from 'styled-components'
import { vars } from '../../../styles/global-styles'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 3.5rem 3rem 5.75rem;
    background: ${({ theme }) => theme.contactFormBg};
    max-width: 37.5rem;
    margin: auto;
    font-size: 1rem;
    box-shadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.12), 0 0.0625rem 0.125rem rgba(0,0,0,0.24);
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: ${({ theme }) => theme.gradient};
        height: 0.5rem;
        width: 100%;
    }
`

export const Legend = styled.legend`
    text-align: center;
    margin-bottom: 1rem;
`

export const Input = styled.input`
    margin: 2rem 0 0;
    border: none;
    border-radius: 0;
    background: none;
    color: ${({ theme }) => theme.textColor};
    border-bottom: 0.0125rem solid ${({ theme }) => theme.linkColor};

    &:focus {
        outline: none;
    }

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${({ theme }) => theme.textColor};
        opacity: 0.8;   
    }
    
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: ${({ theme }) => theme.textColor};
        opacity: 0.8;
    }
    
    ::-ms-input-placeholder { /* Microsoft Edge */
        color: ${({ theme }) => theme.textColor};
        opacity: 0.8;
    }
`

export const Label = styled.label`
    color: ${({ theme }) => theme.textColor};
    opacity: 0.8;
    margin: 2rem 0 0.125rem;
`

export const TextArea = styled.textarea`
    margin: 0 0 3.125rem;
    border: none;
    background: transparent;
    width: 100%;
    height: 6.25rem;
    box-sizing: border-box;
    font-size: 1rem;
    border-radius: 0;
    border: 0.0125rem solid ${({ theme }) => theme.linkColor};
    color: ${({ theme }) => theme.textColor};

    &:focus {
        outline: none;
    }

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${({ theme }) => theme.textColor};
        opacity: 0.8;
    }
    
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: ${({ theme }) => theme.textColor};
        opacity: 0.8;
    }
    
    ::-ms-input-placeholder { /* Microsoft Edge */
        color: ${({ theme }) => theme.textColor};
        opacity: 0.8;
    }
`

export const SubmitWrap = styled.div`
    position: absolute;
    bottom: 1.75rem;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;
`

export const SubmitButton = styled.button`
    padding: .5rem 1.5rem;
    margin-bottom: 4rem;
    width: max-content;
    color: ${vars.light};
    background: ${({ theme }) => theme.gradient};
    display: inline-block;
    font-size: 0.75rem;
    box-sizing: content-box;
    position: relative;
    font-weight: 900;
    border: none;
    cursor: pointer;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: ${({ theme }) => theme.gradient};
        z-index: -1;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0.125rem;
        right: 0.125rem;
        bottom: 0.125rem;
        left: 0.125rem;
        background: ${({ theme }) => theme.contactFormBg};
        z-index: -1;
    }

    @media (min-width: 500px) {
        font-size: 1rem;
    }

    @media (min-width: 700px) {
        font-size: 1.25rem;
    }

    @media (min-width: 900px) {
        margin-bottom: 1.5rem;
    }

    &:hover {
        background-color: ${({ theme }) => theme.accentColorOne};
        background-image: ${({ theme }) => theme.gradient};
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
        text-decoration: none;
    }
`