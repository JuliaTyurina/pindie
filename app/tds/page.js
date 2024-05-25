'use client';

import { CardsListSection } from "../Components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../Components/Preloader/Preloader";

export default function TDS() {

    const tdsGames = useGetDataByCategory(endpoints.games, "TDS");

    return (
        <main className={"main-inner"}>
            {tdsGames ? (tdsGames.length > 0 ? (<CardsListSection id={'tds'} title={'tds'} data={tdsGames} />) : 'В этой категории нет игр') : (<Preloader />)}
        </main>
    )

}