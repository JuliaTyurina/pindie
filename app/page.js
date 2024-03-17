"use client"

import { Banner } from '@/app/Components/Banner/Banner'
import { Promo } from '@/app/Components/Promo/Promo'
import { CardsList } from "@/app/Components/CardsList/CardList";
import { getGamesByCategory } from '@/app/data/data-utils';
import { useEffect } from 'react';

export default function Home() {
  // useEffect(() => {
  //   async function getData (url) {
  //     try {
  //       const response = await fetch(url)
  //       if (response.status !== 200) {
  //         throw new Error('Ошибка получения данных')
  //       }
  //       const data = await response.json()
  //       return data
  //     } catch (error) {
  //       return error
  //     }
  //   }
  //   const dataFromURL = getData('https://api-code-2.practicum-team.ru/games')
  //   console.log(dataFromURL);
  // }, [])


  const popularGames = getGamesByCategory('popular');
  const newGames = getGamesByCategory('new');

  return (
    <main className={"main"}>
      <Banner />
      <CardsList id={'popular'} title={'Популярное'} data={popularGames} />
      <CardsList id={'new'} title={'Новинки'} data={newGames} />
      <Promo />
    </main>
  );
}
