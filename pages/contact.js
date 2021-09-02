import { useEffect, useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { ThemeContext } from 'styled-components'
import Main from '../components/main'
import Form from '../components/form'
import Jumbotron from '../components/jumbotron'
import ImageWrap from '../components/image-wrap'
import { GradientText, Container } from '../styles/global-styles'

const Contact = () => {

  const themeContext = useContext(ThemeContext);

  return (
    <>
        <Head>
            <title>Colin Swinney</title>
            <meta name="description" content="Freelance Web Developer" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Jumbotron>
            <Jumbotron.Container>

                <Jumbotron.Heading>
                  <GradientText>Contact</GradientText> Me
                </Jumbotron.Heading>
                <Jumbotron.SubHeading>I&apos;d love to hear from you.</Jumbotron.SubHeading>

                <ImageWrap transparent>
                    <Image
                        src={themeContext.contactImg}
                        height={600}
                        width={600}
                        alt="Old telephone in a blob"
                    />
                </ImageWrap>

            </Jumbotron.Container>
          </Jumbotron>
            
        <Main>
          <Container>
            <Form />
          </Container>
        </Main>
    </>
  )
}

export default Contact
