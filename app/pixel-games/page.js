'use client';

import { CardsListSection } from "../Components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../Components/Preloader/Preloader";

export default function Pixel() {

    const pixelGames = useGetDataByCategory(endpoints.games, "pixel");

    return (
        <main className={"main-inner"}>
            {pixelGames ? (pixelGames.length > 0 ? (<CardsListSection id={'pixel'} title={'Пиксельные'} data={pixelGames} />) : 'В этой категории нет игр') : (<Preloader />)}
        </main>
    )

}