import styled from 'styled-components'
import { vars } from '../../../styles/global-styles'
import { motion } from 'framer-motion'


export const CardWrap = styled(motion.div)`
    text-align: center;
    width: 300px;
    margin: 1rem;
    padding-top: 0.375rem;
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;
    background: ${({ theme }) => theme.gradient};
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    a &:hover, 
    a &:focus {
        box-shadow: 0 4px 12px rgba(0,0,0,0.25), 0 4px 8px rgba(0,0,0,0.22);
    }
`

export const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12.5rem;
    overflow: hidden;
`

export const TopBg = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('${props => props.bgImg}');
    transition: 0.3s ease;

    a ${CardWrap}:hover &,
    a ${CardWrap}:focus & {
        transform: scale(1.2);
    }
`

export const Bottom = styled.div`
    padding: 0 1rem;
    width: 100%;
    min-height: 6.25rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.bodyBgColorLight};
`

export const Title = styled.h4`
    margin-bottom: 0;
`

export const Text = styled.p`
    margin-bottom: 0;
`