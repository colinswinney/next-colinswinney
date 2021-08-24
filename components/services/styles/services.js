import react from 'react'
import styled, { keyframes } from 'styled-components'
import { c } from '../../../styles/colors'
import { vars } from '../../../styles/global-styles'

const cycle = keyframes`
    0% {
        content: "HTML/CSS";
        opacity: 1;
        color: red;
    }
    8% {
        content: "HTML/CSS";
        opacity: 1;
        color: red;
    }
    9% {
        content: "HTML/CSS";
        opacity: 0;
        color: red;
    }
    10% {
        content: "JavaScript";
        opacity: 0;
        color: red;
    }
    11% {
        content: "JavaScript";
        opacity: 1;
        color: red;
    }
    18% {
        content: "JavaScript";
        opacity: 1;
        color: red;
    }
    19% {
        content: "JavaScript";
        opacity: 0;
        color: red;
    }
    20% {
        content: "React.js";
        opacity: 0;
        color: red;
    }
    21% {
        content: "React.js";
        opacity: 1;
        color: red;
    }
    28% {
        content: "React.js";
        opacity: 1;
        color: red;
    }
    29% {
        content: "React.js";
        opacity: 0;
        color: red;
    }
    30% {
        content: "Next.js";
        opacity: 0;
        color: red;
    }
    31% {
        content: "Next.js";
        opacity: 1;
        color: red;
    }
    38% {
        content: "Next.js";
        opacity: 1;
        color: red;
    }
    39% {
        content: "Next.js";
        opacity: 0;
        color: red;
    }
    40% {
        content: "php";
        opacity: 0;
        color: red;
    }
    41% {
        content: "php";
        opacity: 1;
        color: red;
    }
    48% {
        content: "php";
        opacity: 1;
        color: red;
    }
    49% {
        content: "php";
        opacity: 0;
        color: red;
    }
    50% {
        content: "WordPress";
        opacity: 0;
        color: red;
    }
    51% {
        content: "WordPress";
        opacity: 1;
        color: red;
    }
    58% {
        content: "WordPress";
        opacity: 1;
        color: red;
    }
    59% {
        content: "WordPress";
        opacity: 0;
        color: red;
    }
    60% {
        content: "WooCommerce";
        opacity: 0;
        color: red;
    }
    61% {
        content: "WooCommerce";
        opacity: 1;
        color: red;
    }
    68% {
        content: "WooCommerce";
        opacity: 1;
        color: red;
    }
    69% {
        content: "WooCommerce";
        opacity: 0;
        color: red;
    }
    70% {
        content: "Shopify";
        opacity: 0;
        color: red;
    }
    71% {
        content: "Shopify";
        opacity: 1;
        color: red;
    }
    78% {
        content: "Shopify";
        opacity: 1;
        color: red;
    }
    79% {
        content: "Shopify";
        opacity: 0;
        color: red;
    }
    80% {
        content: "Adobe CC";
        opacity: 0;
        color: red;
    }
    81% {
        content: "Adobe CC";
        opacity: 1;
        color: red;
    }
    88% {
        content: "Adobe CC";
        opacity: 1;
        color: red;
    }
    89% {
        content: "Adobe CC";
        opacity: 0;
        color: red;
    }
    90% {
        content: "Git";
        opacity: 0;
        color: red;
    }
    91% {
        content: "Git";
        opacity: 1;
        color: red;
    }
    98% {
        content: "Git";
        opacity: 1;
        color: red;
    }
    99% {
        content: "Git";
        opacity: 0;
        color: red;
    }
    100% {
        content: "HTML/CSS";
        opacity: 0;
        color: red;
    }
`

export const ServicesSection = styled.section`
    padding: 3rem 1rem;
    min-height: 100vh;
    background: linear-gradient(120deg, ${c.indigo100}, ${c.indigo50});
`

export const Heading = styled.h2`
    font-family: ${vars.fontBody};
    font-weight: 400;
    margin-bottom: 0.25rem;
`

export const CycleText = styled.h2`
    font-size: 5rem;
    margin-bottom: 0;

    &:before {
        color: red;
        content: "HTML/CSS";
        animation: ${cycle} 25s infinite;
    }
`