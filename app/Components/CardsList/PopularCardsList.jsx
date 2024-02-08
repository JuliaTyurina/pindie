import Styles from '@/app/Components/CardsList/CardsList.module.css'
import { PopularCardsFragment } from '@/app/Components/CardsList/PopularCardsFragment'
export const PopularCardsList = () => {
    return <section className={Styles['list-section']}>
    <h2 className={Styles['list-section__title']}>
      Популярное
    </h2>
    <ul className={Styles['cards-list']}>
      <PopularCardsFragment/>
    </ul>
  </section>
}