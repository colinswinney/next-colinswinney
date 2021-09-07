import styled from 'styled-components'
import { vars, FlexContainer, GridContainer } from '../../../../styles/global-styles'

export const ProjectsSectionWrap = styled.section`
    padding-left: 0;
    padding-right: 0;
`

export const FlexBar = styled(FlexContainer)`
    padding: 0 1rem;

    &.right-align {
        justify-content: flex-end;
    }
`

export const Heading = styled.h2`
`

export const Text = styled.p`
`

export const GridContainerProjects = styled(GridContainer)`
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 2rem;
    font-size: 1.33rem;
    text-align: center;
    grid-template-columns: repeat(4, minmax(1fr));
    grid-template-areas:
        "a a e e"
        "a a b b"
        "f f b b"
        "c c g g"
        "c c d d"
        "h h d d";

    @media (min-width: ${vars.breakpoint}) {
        font-size: 1.77rem;
    } 

    @media (min-width: ${vars.breakpointLarge}) {
        grid-template-columns: repeat(4, 12.5%);
        grid-template-areas:
            "a a e e c c g g"
            "a a b b c c d d"
            "f f b b h h d d"
    }
`

export const Cell = styled.div`
    background-image: url("${props => props.bgImg}");
    background-size: cover;
    background-position: center;
    border: 0.0625rem solid ${({ theme }) => theme.bodyBgColor};
    height: 10rem;
    width: 100%;

    &.tall {
        height: 20rem;
        width: 100%;
    }

    &.a {
        grid-area: a;
    }
      
    &.b {
        grid-area: b;
    }
      
    &.c {
        grid-area: c;
    }
      
    &.d {
        grid-area: d;
    }
    
    &.e {
        grid-area: e;
    }
    
    &.f {
        grid-area: f;
    }
    
    &.g {
        grid-area: g;
    }
    
    &.h {
        grid-area: h;
    }
`

export const ProjectAnchor = styled.a`
    width: 100%;
    padding: 1rem;
    height: 100%;
    display: flex;
    align-items: flex-end;
    position: relative;
    background: linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,.75) 33%, rgba(0,0,0,1) 66%);
    border: 0.125rem solid ${({ theme }) => theme.linkColor};
    font-family: ${vars.fontHeading};
    text-align: center;
    line-height: 1;
    opacity: 0;
    transition: ${vars.transition};

    &:after {
        content: "${props => props.afterTitle}";
        padding: 0 0.5rem;
        position: absolute;
        overflow-wrap: break-word;
        left: 0;
        right: 0;
    }

    &:hover,
    &:focus {
        opacity: 1;
        color: ${vars.light};
    }

`