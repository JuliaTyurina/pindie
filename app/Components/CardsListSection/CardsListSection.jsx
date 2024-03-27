import Styles from "@/app/Components/CardsListSection/CardsListSection.module.css";
import { CardsList } from "@/app/Components/CardsListSection/CardsList";
import { CardsSlider } from "@/app/Components/CardsListSection/CardsSlider";

export const CardsListSection = (props) => {
  return (
    <section className={Styles["list-section"]}>
      <h2 className={Styles["list-section__title"]} id={props.id}>
        {props.title}
      </h2>
      {props.type === 'slider' ? <CardsSlider data={props.data} /> : <CardsList data={props.data} />}
    </section>
  );
};