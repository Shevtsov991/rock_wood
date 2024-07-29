import React from "react";
import s from "./conectionSection.module.scss";
import img from "../../../image/Group 468.jpg";
import { IconSvgSelector } from "../../../image/svgSelector/iconSvgSelector";
export default function ConnectionSection() {
  return (
    <section className={s.connectionSection}>
      <div className={s.firstCulmn}>
        <h3 className={s.title}>Свяжитесь с нами</h3>
        <p className={s.text}>
          {`Мы будем рады услышать ваше мнение. Обращайтесь к нам по любым вопросам
        =)`}
        </p>
        <img src={img} alt="Палитра" className={s.img} />
      </div>
      <address className={s.addressBlock}>
        <ul className={s.addressList}>
          <li className={s.item}>
            <IconSvgSelector id="email" />{" "}
            <div className={s.itemTextBlock}>
              <span className={s.itemTitle}>Email</span>
              <a href="mailto:info@rockwood.ru" className={s.link}>
                info@rockwood.ru
              </a>
            </div>
          </li>
          <li className={s.item}>
            <IconSvgSelector id="phone" />{" "}
            <div className={s.itemTextBlock}>
              <span className={s.itemTitle}>Телефон</span>
              <a href="tel:+79673603346" className={s.link}>
                +7 967 360 33 46
              </a>
              <a href="tel:+79872645571" className={s.link}>
                +7 987 264-55-71
              </a>
            </div>
          </li>
          <li className={s.item}>
            <IconSvgSelector id="addr" />{" "}
            <div className={s.itemTextBlock}>
              <span className={s.itemTitle}>Адрес</span>
              <a href="#" className={s.link}>
                Офис: Калинина 48, офис 004
                <br />
                Производство: Тихорецкая 7, корп 35
              </a>
            </div>
          </li>
        </ul>
      </address>
    </section>
  );
}
