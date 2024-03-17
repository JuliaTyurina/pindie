import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../Components/CardsList/CardList";
import { getNormalizedGameDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";

export default async function Popular () {
const popularGames = await getNormalizedGameDataByCategory(endpoints.games, 'popular')

    return (
        <main className={"main-inner"}>
            <CardsList id={'popular'} title={'Популярные'} data={popularGames} />
        </main>
    )
    
}