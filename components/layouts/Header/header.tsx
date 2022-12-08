import { Article } from '../../../types/article'
import styles from './header.module.css'

type Props = {
  specials: Array<Article>
}

export default function Header({ specials }: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.header__logos}>
        <img className={styles.header__logo} src="/logo.svg" alt="" />
        <p>〇〇県〇〇市の情報発信メディア</p>
      </div>
      <nav className={styles.header__nav}>
        <ul className={styles.header__nav__items}>
          <li className={styles.header__nav__item}>
            <a href="/">ホーム</a>
          </li>
          <li className={styles.header__nav__item}>
            <a href="/articles">記事一覧</a>
          </li>
          <li className={styles.header__nav__item}>
            <a href="">私たちについて</a>
          </li>
        </ul>
      </nav>
      <div className={styles.header__post}>
        <h2 className={styles.header__post__title}>人気投稿</h2>
        <div className={styles.header__post__items}>
          {specials.map((blog) => (
            <a
              className={styles.header__post__item}
              href={`/articles/${blog.id}`}
              key={blog.id}
            >
              <img src={blog.eyecatch.url} alt="" />
              {/* <a href="#">移住</a> */}
              <h2>{blog.title}</h2>
              <p>{blog.publishedAt}</p>
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
