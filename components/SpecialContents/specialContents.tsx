import styles from '../NewContents/newContents.module.scss'
import type { Article } from '../../types/article'
import { client } from '../../libs/client'

type Props = {
  specials: Array<Article>
}

export default function SpecialContents({ specials }: Props) {
  return (
    <div className={styles.newCon}>
      <h2 className={styles.newCon__title}>特集</h2>
      <div className={styles.newCon__post}>
        {specials.map((blog) => (
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
