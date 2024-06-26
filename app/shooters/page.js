'use client';

import { CardsListSection } from "../Components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../Components/Preloader/Preloader";

export default function Shooters () {

const shooterGames = useGetDataByCategory(endpoints.games, "shooter");

    return (
        <main className={"main-inner"}>
            {shooterGames ? (shooterGames.length > 0 ? (<CardsListSection id={'shooter'} title={'Шутеры'} data={shooterGames} />) : 'В этой категории нет игр') : (<Preloader />)}
        </main>
    )
    
}