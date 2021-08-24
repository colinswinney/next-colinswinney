import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { CardWrap, Top, TopBg, Bottom, Title, Text } from './styles/card'

export default function Card({ children, ...restProps }) {


    const controls = useAnimation()
    const { ref, inView } = useInView({ threshold: 0, triggerOnce: true })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView])

    const variants = {
        hidden: { scale: 0 },
        visible: { 
            scale: 1,
            transition: {
                duration: 0.5,
            }
        }
    }

    return (
        <CardWrap 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
        >
            { children }
                {/* <CardTop>
                    <CardTopBg bgImg={project.node.featuredImage.node.sourceUrl}/>
                </CardTop>
                <CardBottom>
                    {project.node.title}
                </CardBottom> */}
        </CardWrap>
    )
}

Card.Top = function CardTop({ children, ...restProps }) {
    return <Top>{ children }</Top>
}

Card.TopBg = function CardTopBg({ children, ...restProps }) {
    return <TopBg {...restProps}>{ children }</TopBg>
}

Card.Bottom = function CardBottom({ children, ...restProps }) {
    return <Bottom>{ children }</Bottom>
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title>{ children }</Title>
}

Card.Text = function CardText({ children, ...restProps }) {
    return <Text>{ children }</Text>
}