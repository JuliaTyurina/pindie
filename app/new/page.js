'use client';

import { CardsListSection } from "../Components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../Components/Preloader/Preloader";

export default function New() {

    const newGames = useGetDataByCategory(endpoints.games, "new");

    return (
        <main className={"main-inner"}>
            { newGames ? (newGames.length > 0 ? (<CardsListSection id={'new'} title={'Новинки'} data={newGames} />) : 'В этой категории нет игр') : (<Preloader />)}
        </main>
    )

}