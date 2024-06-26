'use client';

import { CardsListSection } from "@/app/Components/CardsListSection/CardsListSection";
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { Preloader } from "@/app/Components/Preloader/Preloader";

export default function Popular () {
    
const popularGames = useGetDataByCategory(endpoints.games, "popular");

    return (
        <main className={"main-inner"}>
            {popularGames ? (popularGames.length > 0 ? (<CardsListSection id={'popular'} title={'Популярные'} data={popularGames} />) : 'В этой категории нет игр') : (<Preloader />)}
        </main>
    )
    
}