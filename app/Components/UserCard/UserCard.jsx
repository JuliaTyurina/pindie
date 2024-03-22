import Styles from '@/app/Components/UserCard/UserCard.module.css'

export const UserCard = (props) => {
    const userpic = '/images/cat-moving.gif'
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('ru-RU', options);
    };
    return <article className={Styles['card']}>
                <img
                    src={userpic}
                    alt=""
                    className={Styles['card__image']}
                />
                <div className={Styles['card__content-block']}>
                    <h3 className={Styles['card__title']}>{props.data.username}</h3>
                    <p className={Styles['card__description']}>
                        Твоя почта {props.data.email}
                    </p>
                    <p className={Styles['card__description']}> Ты присоединился к нам {formatDate(props.data.created_at)}
                    </p>
                </div>

            </article>
}