import Image from "next/image";
import styles from "./page.module.css";
import { Banner } from '@/app/Components/Banner/Banner'
import { Promo } from '@/app/Components/Promo/Promo'
import { PopularCardsList } from "@/app/Components/CardsList/PopularCardsList";
import { NewCardsList } from "./Components/CardsList/NewCardsList";

export default function Home() {
  return (
    <main className="main">
      <Banner/>
      <PopularCardsList/>
      <NewCardsList/>
      <Promo/>
    </main>
  );
}
