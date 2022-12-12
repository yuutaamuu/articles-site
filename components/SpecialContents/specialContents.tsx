import styles from '../NewContents/newContents.module.css'
import type { Article } from '../../types/article'
import Link from 'next/link'

type Props = {
  specials: Array<Article>
}

export default function SpecialContents({ specials }: Props) {
  return (
    <div className={styles.newCon}>
      <h2 className={styles.newCon__title}>特集</h2>
      <div className={styles.newCon__post}>
        {specials.map((blog) => (
          <Link
            className={styles.newCon__post__item}
            href={`/articles/${blog.id}`}
            key={blog.id}
          >
            <div>
              <img src={blog.eyecatch.url} alt="" />
            </div>
            {/* <a href="#">移住</a> */}
            <h2>{blog.title}</h2>
            <p>{new Date(blog.publishedAt).toLocaleDateString()}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
