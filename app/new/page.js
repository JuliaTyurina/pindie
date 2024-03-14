import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../Components/CardsList/CardList";

export default function New () {
const newGames = getGamesByCategory('new')

    return (
        <main className={"main-inner"}>
            <CardsList id={'new'} title={'Новинки'} data={newGames} />
        </main>
    )
    
}