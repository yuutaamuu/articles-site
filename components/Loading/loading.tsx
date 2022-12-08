import styles from './Loading.module.css'

type Props = {
  isShow: boolean
}

export default function Loading({ isShow }: Props) {
  return (
    <div
      style={{
        opacity: isShow ? 1 : 0,
        transition: '0.5s',
        display: isShow ? 'block' : 'none',
      }}
      className={styles.loading}
    >
      <div className={styles.loading_items}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
