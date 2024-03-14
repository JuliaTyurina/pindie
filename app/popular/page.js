import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../Components/CardsList/CardList";

export default function New () {
const popularGames = getGamesByCategory('popular')

    return (
        <main className={"main-inner"}>
            <CardsList id={'popular'} title={'Популярные'} data={popularGames} />
        </main>
    )
    
}