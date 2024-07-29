import React from "react";
import { useCastomSelector } from "../../../hooks/store";
import { cardDataSelector } from "../../../store/selectors";
import Card from "./card/card";
import s from "./cards.module.scss";

export default function Cards() {
  const cardlist = useCastomSelector(cardDataSelector);

  return (
    <section className={s.cardsList}>
      {cardlist.data.slice(0, 6).map((el) => (
        <Card el={el} key={el.id} />
      ))}
    </section>
  );
}
