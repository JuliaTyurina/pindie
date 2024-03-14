import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../Components/CardsList/CardList";

export default function New () {
const tdsGames = getGamesByCategory('TDS')

    return (
        <main className={"main-inner"}>
            <CardsList id={'tds'} title={'tds'} data={tdsGames} />
        </main>
    )
    
}