import React from "react";
import s from "./mainTitleSection.module.scss";
import img from "../../../image/chair.png";
export default function MainTitleSection() {
  return (
    <section className={s.titleSection}>
      <div className={s.textBlock}>
        <h2 className={s.title}>
          Уже 11 лет Rockwood дарит своим клиентам качество и комфорт
        </h2>
        <p className={s.description}>
          Мы создаем мебель, которая не только украшает интерьер, но и делает
          жизнь удобнее и приятнее. За это время мы накопили богатый опыт и
          заработали доверие многих клиентов.
        </p>
        <hr className={s.line}></hr>
      </div>
      <img src={img} alt="Стул" className={s.img} />
    </section>
  );
}
