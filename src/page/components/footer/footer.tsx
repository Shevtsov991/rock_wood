import React from "react";
import s from "./footer.module.scss";
import logo from "../../../image/logo.png";
import { IconSvgSelector } from "../../../image/svgSelector/iconSvgSelector";
import Copyright from "./copyright/copyright";
export default function Footer() {
  return (
    <>
      <section className={s.footer}>
        {/* <img src={logo} alt="Логотип" className={s.logo} /> */}

        <IconSvgSelector id="logo" />
        <ul className={s.navList}>
          <li className={s.listTitle}>Меню</li>
          <li className={s.item}>
            <a href="#">О компании</a>
          </li>
          <li className={s.item}>
            <a href="#">Галерея работ</a>
          </li>
          <li className={s.item}>
            <a href="#">Контакты</a>
          </li>
        </ul>
        <ul className={s.supportList}>
          <li className={s.listTitle}>Помощь</li>
          <li className={s.item}>
            <a href="/#">Отзывы</a>
          </li>
          <li className={s.item}>
            <a href="/#">Вопросы</a>
          </li>
          <li className={s.item}>
            <a href="/#">Как заказать</a>
          </li>
        </ul>
        <div className={s.feedBackSection}>
          <h5 className={s.feedBackTitle}>Обратный звонок</h5>
          <p className={s.feedBackText}>
            Введите номер телефона и наш менеджер вам перезвонит
          </p>
          <form className={s.feedBackForm}>
            <input
              type="tel"
              name="tel"
              id="telFooter"
              placeholder="+ 7 (___) _ _ _ - _ _ - _ _"
              className={s.input}
            />
            <button className={s.btn}>Отправить</button>
            <p className={s.formfooter}>
              Отправляя номер телефона, вы соглашаетесь с политикой
              конфиденциальности
            </p>
          </form>
        </div>
      </section>
      <Copyright />
    </>
  );
}
