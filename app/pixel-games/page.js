import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../Components/CardsList/CardList";

export default function Pixel () {
const pixelGames = getGamesByCategory('pixel')

    return (
        <main className={"main-inner"}>
            <CardsList id={'pixel'} title={'Пиксельные'} data={pixelGames} />
        </main>
    )
    
}