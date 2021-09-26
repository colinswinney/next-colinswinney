import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { CardWrap, ImageDiv, Info, Title, Summary, ReadMore, TechList, TechListItem } from './styles/card'

export default function Card({ children, ...restProps }) {


    const controls = useAnimation()
    const { ref, inView } = useInView({ threshold: .5, triggerOnce: true })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView])

    const variants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    }

    return (
        <CardWrap 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            {...restProps}
        >
            { children }
        </CardWrap>
    )
}

Card.ImageDiv = function CardImageDiv({ children, ...restProps }) {
    return <ImageDiv {...restProps}>{ children }</ImageDiv>
}

Card.Info = function CardInfo({ children, ...restProps }) {
    return <Info {...restProps}>{ children }</Info>
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{ children }</Title>
}

Card.Summary = function CardSummary({ children, ...restProps }) {
    return <Summary {...restProps}>{ children }</Summary>
}

Card.ReadMore = function CardReadMore({ children, ...restProps }) {
    return <ReadMore {...restProps}>{ children }</ReadMore>
}

Card.TechList = function CardTechList({ children, ...restProps }) {
    return <TechList {...restProps}>{ children }</TechList>
}

Card.TechListItem = function CardTechListItem({ children, ...restProps }) {
    return <TechListItem {...restProps}>{ children }</TechListItem>
}