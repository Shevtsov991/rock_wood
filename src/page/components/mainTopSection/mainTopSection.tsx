import React from "react";
import s from "./mainTopSection.module.scss";
import img from "../../../image/BrightPark_0021 1.jpg";
export default function MainTopSection() {
  return (
    <section className={s.MainTopSection}>
      <div className={s.textBlock}>
        <h1 className={s.title}>Ваш идеальный интерьер начинается здесь</h1>
        <button className={s.button}>Заказать замер</button>
      </div>
      <div className={s.gradient}></div>
      <img src={img} alt="Главное Фото" className={s.img} />
    </section>
  );
}
