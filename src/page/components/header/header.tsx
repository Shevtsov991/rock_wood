import React from "react";
import s from "./header.module.scss";
import img from "../../../image/logo.png";

export default function Header() {
  return (
    <div className={s.header}>
      <img src={img} alt="Логотип" className={s.logo} />
      <nav className={s.navigation}>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <a href="/">О компании</a>
          </li>
          <li className={s.navItem}>
            <a href="/">Галерея работ</a>
          </li>
          <li className={s.navItem}>
            <a href="/">Контакты</a>
          </li>
        </ul>
      </nav>
      <div className={s.contacts}>
        <button className={s.button}>Обратный звонок</button>
        <a href="tel:+79673603346" className={s.tel}>
          +7 967 360 33 46
        </a>
      </div>
    </div>
  );
}
