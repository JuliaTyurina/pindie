'use client';

import { CardsListSection } from "../Components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../Components/Preloader/Preloader";

export default function Runners () {

    const runnerGames = useGetDataByCategory(endpoints.games, "runner");
    console.log(runnerGames);

    return (
        <main className={"main-inner"}>
            {runnerGames ? (<CardsListSection id={'runner'} title={'Ранеры'} data={runnerGames} />) : (<Preloader/>)}
        </main>
    )
    
}