import React from "react";
import s from "../footer.module.scss";
import { IconSvgSelector } from "../../../../image/svgSelector/iconSvgSelector";
export default function Copyright() {
  return (
    <div className={s.copyrightBlock}>
      <div className={s.leftCulmn}>
        <small className={s.copyright}>
          © 2024 Rockwood store. Все права защищены.
        </small>
        <a className={s.polycy} href="/">
          <small>Политика конфиденциальности</small>
        </a>
      </div>
      <div className={s.rightCulmn}>
        <a href="tel:+79673603346" className={s.tel}>
          +7 967 360 33 46
        </a>
        <IconSvgSelector id="wh" />
        <IconSvgSelector id="tg" />
        <IconSvgSelector id="inst" />
      </div>
    </div>
  );
}
