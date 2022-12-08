import styles from './heroArea.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper' // モジュールをインポート

import 'swiper/css'
import 'swiper/css/navigation' // スタイルをインポート
import 'swiper/css/pagination'
import { Article } from '../../types/article'

type Props = {
  tops: Array<Article>
}

export default function HeroArea({ tops }: Props) {
  return (
    <div className={styles.heroArea}>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        slidesPerView={1}
        speed={1000}
        navigation={{
          prevEl: '#button_prev',
          nextEl: '#button_next',
        }}
        pagination={{ el: '#pagination', clickable: true, type: 'fraction' }}
        // effect="coverflow"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true}
      >
        {tops.map((top) => (
          <SwiperSlide>
            <a
              key={top.id}
              className={styles.heroArea__anchor}
              href={`/articles/${top.id}`}
            >
              <img src={top.eyecatch.url} alt="" />
              <p className={styles.heroArea__anchor__category}>
                {top.category.name}
              </p>
              <p className={styles.heroArea__anchor__title}>{top.title}</p>
            </a>
          </SwiperSlide>
        ))}
        <div id="button_prev" className={styles.swiperButtonPrev}></div>
        <div id="button_next" className={styles.swiperButtonNext}></div>
        <div id="pagination" className={styles.swiperPagination}></div>
      </Swiper>
      {/* <a className={styles.heroArea__anchor} href="#">
        <img src="/image1.png" alt="" />
        <p className={styles.heroArea__anchor__category}>移住</p>
        <p className={styles.heroArea__anchor__title}>
          〇〇県〇〇市の情報発信メディア
        </p>
      </a>
      <div className={styles.heroArea__nav}>
        <button>Prev</button>
        <p>01 / 04</p>
        <button>Next</button>
      </div> */}
    </div>
  )
}
