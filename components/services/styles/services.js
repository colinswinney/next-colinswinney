import react from 'react'
import styled, { keyframes } from 'styled-components'
import { c } from '../../../styles/colors'
import { vars } from '../../../styles/global-styles'

// const cycle = keyframes`
//     0% {
//         opacity: 1;
//         color: red;
//     }
//     8% {
//         opacity: 1;
//         color: red;
//     }
//     9% {
//         opacity: 0;
//         color: red;
//     }
//     10% {
//         opacity: 0;
//         color: red;
//     }
//     11% {
//         opacity: 1;
//         color: red;
//     }
//     18% {
//         opacity: 1;
//         color: red;
//     }
//     19% {
//         opacity: 0;
//         color: red;
//     }
//     20% {
//         opacity: 0;
//         color: red;
//     }
//     21% {
//         opacity: 1;
//         color: red;
//     }
//     28% {
//         opacity: 1;
//         color: red;
//     }
//     29% {
//         opacity: 0;
//         color: red;
//     }
//     30% {
//         opacity: 0;
//         color: red;
//     }
//     31% {
//         opacity: 1;
//         color: red;
//     }
//     38% {
//         opacity: 1;
//         color: red;
//     }
//     39% {
//         opacity: 0;
//         color: red;
//     }
//     40% {
//         opacity: 0;
//         color: red;
//     }
//     41% {
//         opacity: 1;
//         color: red;
//     }
//     48% {
//         opacity: 1;
//         color: red;
//     }
//     49% {
//         opacity: 0;
//         color: red;
//     }
//     50% {
//         opacity: 0;
//         color: red;
//     }
//     51% {
//         opacity: 1;
//         color: red;
//     }
//     58% {
//         opacity: 1;
//         color: red;
//     }
//     59% {
//         opacity: 0;
//         color: red;
//     }
//     60% {
//         opacity: 0;
//         color: red;
//     }
//     61% {
//         opacity: 1;
//         color: red;
//     }
//     68% {
//         opacity: 1;
//         color: red;
//     }
//     69% {
//         opacity: 0;
//         color: red;
//     }
//     70% {
//         opacity: 0;
//         color: red;
//     }
//     71% {
//         opacity: 1;
//         color: red;
//     }
//     78% {
//         opacity: 1;
//         color: red;
//     }
//     79% {
//         opacity: 0;
//         color: red;
//     }
//     80% {
//         opacity: 0;
//         color: red;
//     }
//     81% {
//         opacity: 1;
//         color: red;
//     }
//     88% {
//         opacity: 1;
//         color: red;
//     }
//     89% {
//         opacity: 0;
//         color: red;
//     }
//     90% {
//         opacity: 0;
//         color: red;
//     }
//     91% {
//         opacity: 1;
//         color: red;
//     }
//     99% {
//         opacity: 1;
//         color: red;
//     }
//     100% {
//         opacity: 0;
//         color: red;
//     }
// `

export const ServicesSection = styled.section`
    padding: 3rem 1rem;
    text-align: center;
    min-height: 100vh;
    background: linear-gradient(120deg, ${c.indigo100}, ${c.indigo50});

    
      
      .loop-text .cycle-text {
        position: absolute;
        height: 100%;
        opacity: 0;
        transition: .25s ease-out;
        margin: auto;
        left: 0;
        right: 0;
        font-size: 4rem;
      }
      .loop-text .cycle-text.show {
        opacity: 1;
      }
`

export const LoopTextWrap = styled.div`
    position: relative;
    height: 6rem;
    overflow: hidden;
`

export const Heading = styled.h2`
    font-family: ${vars.fontBody};
    font-weight: 400;
    margin-bottom: 0.25rem;
    font-size: clamp(1.25rem, 1vw + 1.25rem, 3rem);
`

export const CycleText = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 0;
`

