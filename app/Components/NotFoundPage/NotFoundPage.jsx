import Styles from "./NotFoundPage.module.css";

export default function NotFound(props) {
    return (
        <section className={Styles['not-found-page']}>
            <h2 className={Styles['not-found-title']}>Мы тщательно искали, но не нашли такую страницу :(</h2>
            <img src="/images/not-found.gif" className={Styles['not-found-img']} />
        </section>
    );
}