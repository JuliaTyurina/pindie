import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../Components/CardsList/CardList";

export default function Runners () {
const runnerGames = getGamesByCategory('runner')

    return (
        <main className={"main-inner"}>
            <CardsList id={'runner'} title={'Ранеры'} data={runnerGames} />
        </main>
    )
    
}