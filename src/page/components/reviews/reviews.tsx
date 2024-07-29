import React from "react";
import { Slider } from "./slider/slider";
import s from "./reviews.module.scss";
import { useCastomSelector } from "../../../hooks/store";
import { ReviewsDataSelector } from "../../../store/selectors";

export default function Reviews() {
  return (
    <section className={s.reviewsSection}>
      <div className={s.textBlock}>
        <h3 className={s.title}>Отзывы</h3>
        <p className={s.text}>Прочтите отзывы наших довольных клиентов</p>
      </div>

      <Slider />
    </section>
  );
}
