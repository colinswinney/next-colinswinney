import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Colin Swinney</title>
        <meta name="description" content="Freelance Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Colin Swinney</h1>
      </main>

    </>
  )
}
