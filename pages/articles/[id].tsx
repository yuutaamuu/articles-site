import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/layouts/Header/header'
import { client } from '../../libs/client'
import { Article } from '../../types/article'
import { getSingleContent, getSpecialContents } from '../api/getContents'
import styles from '../../styles/Home.module.css'
import style from './article.module.css'
import { useEffect, useState } from 'react'

type Props = {
  blog: Article
  specials: Array<Article>
}

export default function ArticleId({ blog, specials }: Props) {
  const [isTrue, setIsTrue] = useState(true)

  useEffect(() => {
    const appear = setTimeout(() => {
      setIsTrue(false)
    }, 3000)

    return () => {
      clearTimeout(appear)
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainFlex}>
        <Header specials={specials}></Header>
        <main className={style.article}>
          <img
            style={{
              opacity: isTrue ? 0 : 1,
              transform: isTrue ? 'translateY(10px)' : 'translateY(0)',
            }}
            className={style.article__topImg}
            src={blog.eyecatch.url}
            alt=""
          />
          <h1
            style={{
              opacity: isTrue ? 0 : 1,
              transform: isTrue ? 'translateY(10px)' : 'translateY(0)',
            }}
            className={style.article__title}
          >
            {blog.title}
          </h1>
          <p
            style={{
              opacity: isTrue ? 0 : 1,
              transform: isTrue ? 'translateY(10px)' : 'translateY(0)',
            }}
            className={style.article__date}
          >
            {new Date(blog.publishedAt).toLocaleDateString()}
          </p>
          <div
            style={{
              opacity: isTrue ? 0 : 1,
              transform: isTrue ? 'translateY(10px)' : 'translateY(0)',
            }}
            className={style.article__content}
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
          />
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
    </div>
  )
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs', queries: { limit: 9999 } })

  const paths = data.contents.map((content: any) => `/articles/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const singleContent = await getSingleContent(id)
  const specialContents = await getSpecialContents()

  return {
    props: {
      blog: singleContent,
      specials: specialContents,
    },
  }
}
