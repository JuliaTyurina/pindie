import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../Components/CardsList/CardList";

export default function New () {
const shooterGames = getGamesByCategory('shooter')

    return (
        <main className={"main-inner"}>
            <CardsList id={'shooter'} title={'Шутеры'} data={shooterGames} />
        </main>
    )
    
}