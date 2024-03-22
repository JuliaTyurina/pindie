"use client"

import { Banner } from '@/app/Components/Banner/Banner'
import { Promo } from '@/app/Components/Promo/Promo'
import { useGetDataByCategory } from './api/api-hooks';
import { endpoints } from './api/config';
import { Preloader } from "@/app/Components/Preloader/Preloader";
import { CardsListSection } from './Components/CardsListSection/CardsListSection';

export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games, 'popular');
  const newGames = useGetDataByCategory(endpoints.games, "new");

  return (
    <main className={"main"}>
      <Banner />
      {popularGames ? (<CardsListSection id={'popular'} title={'Популярные'} data={popularGames} type={'slider'}/>) : (<Preloader/>)}
      {newGames ? (<CardsListSection id={'new'} title={'Новинки'} data={newGames} type={'slider'}/>) : (<Preloader />)}
      <Promo />
    </main>
  );
}
