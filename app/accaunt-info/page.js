'use client'

import { useEffect, useState } from 'react';
import { Preloader } from "../Components/Preloader/Preloader";
import { useStore } from "../store/app-store";
import { UserCard } from '@/app/Components/UserCard/UserCard'
import { getUserVotedGames, isResponseOk } from '@/app/api/api-utils';
import { CardsList } from '@/app/Components/CardsListSection/CardsList';
import { endpoints } from '../api/config';

export default function AccauntInfo(props) {
    const authContext = useStore();
    const user = authContext.user;
    const [votedGames, setVotedGames] = useState(null);
    const [preloaderVisible, setPreloaderVisible] = useState(true);

    useEffect(() => {
        async function fetchVotedGames() {
            setPreloaderVisible(true);
            const games = await getUserVotedGames(endpoints.games, user.id);
            isResponseOk(games) ? setVotedGames(games) : setVotedGames(null)
            setPreloaderVisible(false);
        }
        fetchVotedGames()
    }, []);

    return (
        <main className={"main-inner"}>
            {user ? (
                <>
                    <UserCard data={user} />
                    <div className="user-games">
                        <h2>Игры, за которые ты проголосовал:</h2>
                        {/* Добавила проверку, приходят ли данные в votedGames */}
                        {votedGames ? (<CardsList data={votedGames} />) : ('Возникла ошибка при загрузке игр')}
                    </div>
                </>
            ) : (
                preloaderVisible && <Preloader />
            )}
        </main>
    );
}
