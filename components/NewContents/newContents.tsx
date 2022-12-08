import styles from './newContents.module.scss'
import type { Article } from '../../types/article'
import { client } from '../../libs/client'

type Props = {
  blogs: Array<Article>
}

export default function NewContents({ blogs }: Props) {
  return (
    <div className={styles.newCon}>
      <h2 className={styles.newCon__title}>最新記事</h2>
      <div className={styles.newCon__post}>
        {blogs.map((blog) => (
          <a
            className={styles.newCon__post__item}
            href={`/articles/${blog.id}`}
            key={blog.id}
          >
            <div>
              <img src={blog.eyecatch.url} alt="" />
            </div>

            {/* <a href="#">移住</a> */}
            <h2>{blog.title}</h2>
            <p>{blog.publishedAt}</p>
          </a>
        ))}
      </div>
    </div>
  )
}