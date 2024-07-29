import React from "react";
import { Icard } from "../../../../types/templates";
import s from "../cards.module.scss";
interface props {
  el: Icard;
}
export default function Card({ el }: props) {
  return (
    <div className={s.card}>
      <span className={s.cardTitle}>{el.title}</span>
      <p className={s.cardBody}>{el.body}</p>
    </div>
  );
}
