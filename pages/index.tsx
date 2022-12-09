import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import type { Article } from '../types/article'
import Header from '../components/layouts/Header/header'
import HeroArea from '../components/HeroArea/heroArea'
import NewContents from '../components/NewContents/newContents'
import {
  getNewContents,
  getSpecialContents,
  getTopContents,
} from './api/getContents'
import SpecialContents from '../components/SpecialContents/specialContents'
import Loading from '../components/Loading/loading'
import { useEffect, useState } from 'react'

type Props = {
  blogs: Array<Article>
  specials: Array<Article>
  tops: Array<Article>
}

export default function Home({ blogs, specials, tops }: Props) {
  const [isShow, setIsShow] = useState(true)

  useEffect(() => {
    const loadingShow = setTimeout(() => {
      setIsShow(false)
    }, 3000)

    return () => {
      clearTimeout(loadingShow)
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>〇〇県〇〇市の情報発信メディア</title>
        <meta name="description" content="〇〇県〇〇市の情報発信メディア" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainFlex}>
        <Header specials={specials}></Header>
        <main className={styles.main}>
          <HeroArea tops={tops} />
          <NewContents blogs={blogs} />
          <SpecialContents specials={specials}></SpecialContents>
        </main>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      <Loading isShow={isShow}></Loading>
    </div>
  )
}

export const getStaticProps = async () => {
  const newContents = await getNewContents()
  const specialContents = await getSpecialContents()
  const topContents = await getTopContents()

  return {
    props: {
      blogs: newContents,
      specials: specialContents,
      tops: topContents,
    },
  }
}
