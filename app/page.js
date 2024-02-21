import { Banner } from '@/app/Components/Banner/Banner'
import { Promo } from '@/app/Components/Promo/Promo'
import { CardsList } from "@/app/Components/CardsList/CardList";
import { getGamesByCategory } from '@/app/data/data-utils';

export default function Home() {
  const popularGames = getGamesByCategory('popular');

  const newGames = getGamesByCategory('new');

  return (
    <main className="main">
      <Banner />
      <CardsList id={'popular'} title={'Популярное'} data={popularGames}>
      </CardsList>
      <CardsList id={'new'} title={'Новинки'} data={newGames}>
      </CardsList>
      <Promo />
    </main>
  );
}
