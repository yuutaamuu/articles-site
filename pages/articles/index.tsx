import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import sty from '../../components/NewContents/newContents.module.css'

import type { Article } from '../../types/article'
import Header from '../../components/layouts/Header/header'
import { getAllContents, getSpecialContents } from '../api/getContents'
import Link from 'next/link'

type Props = {
  blogs: Array<Article>
  specials: Array<Article>
}

export default function Home({ blogs, specials }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>〇〇県〇〇市の情報発信メディア</title>
        <meta name="description" content="〇〇県〇〇市の情報発信メディア" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainFlex}>
        <Header specials={specials}></Header>
        <main>
          <div className={sty.newCon}>
            <h2 className={sty.newCon__title}>記事一覧</h2>
            <div className={sty.newCon__post}>
              {blogs.map((blog) => (
                <Link
                  className={sty.newCon__post__item}
                  href={`/articles/${blog.id}`}
                  key={blog.id}
                >
                  <div>
                    <img src={blog.eyecatch.url} alt="" />
                  </div>
                  <h2>{blog.title}</h2>
                  <p>{new Date(blog.publishedAt).toLocaleDateString()}</p>
                </Link>
              ))}
            </div>
          </div>
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

export const getStaticProps = async () => {
  const allContents = await getAllContents()
  const specialContents = await getSpecialContents()

  return {
    props: {
      blogs: allContents,
      specials: specialContents,
    },
  }
}
