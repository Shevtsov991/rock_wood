import React from "react";
import img from "../../../image/inside-weather-BayIzHKkjM4-unsplash 1.jpg";
import s from "./orderSection.module.scss";

export default function OrderSection() {
  return (
    <div className={s.orderSection}>
      <form action="/" className={s.orderForm}>
        <h3 className={s.formTitle}>Заказать услугу</h3>
        <input type="text" className={s.name} placeholder="Имя" />
        <input
          type="tel"
          name="tel"
          id="tel"
          className={s.tel}
          placeholder="Телефон"
        />
        <input type="button" value="Отправить" className={s.btn} />
        <p className={s.approv}>
          Нажимая кнопку "Отправить", я даю свое согласие на обработку моих
          персональных данных
        </p>
      </form>
      <img src={img} alt="Тумба" className={s.img} />
    </div>
  );
}
