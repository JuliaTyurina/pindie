'use client'

import { useEffect, useState } from 'react';
import { Preloader } from "@/app/Components/Preloader/Preloader";
import { useStore } from "@/app/store/app-store";
import { UserCard } from '@/app/Components/UserCard/UserCard'
import { getUserVotedGames, isResponseOk } from '@/app/api/api-utils';
import { CardsList } from '@/app/Components/CardsListSection/CardsList';
import { endpoints } from '@/app/api/config';

export default function AccauntInfo(props) {
    const authContext = useStore();
    const user = authContext.user;
    const [votedGames, setVotedGames] = useState(null);
    const [preloaderVisible, setPreloaderVisible] = useState(true);

    useEffect(() => {
        async function fetchVotedGames() {
            if (user) {
                console.log(user);
                setPreloaderVisible(true);
                const games = await getUserVotedGames(endpoints.games, user._id);
                isResponseOk(games) ? setVotedGames(games) : setVotedGames(null)
                setPreloaderVisible(false);
            }
        }
        fetchVotedGames()
    }, [user]);

    return (
        <main className={"main-inner"}>
            {user ? (
                <>
                    <UserCard data={user} />
                    <div className="user-games">
                        <h2>Игры, за которые ты проголосовал:</h2>
                        {votedGames && votedGames.length > 0 && (
                            <>
                                <CardsList data={votedGames} />
                            </>
                        )}
                        {votedGames && votedGames.length === 0 && (
                            'Ты еще не голосовал за игры'
                        )}
                        {!votedGames && 'Возникла ошибка при загрузке игр'}
                    </div>
                </>
            ) : (
                preloaderVisible && <Preloader />
            )}
        </main>

    );
}
