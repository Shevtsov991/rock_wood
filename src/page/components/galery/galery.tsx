import React from "react";
import s from "./galery.module.scss";
import Image from "./image";
import { useCastomSelector } from "../../../hooks/store";
import { ImageDataSelector } from "../../../store/selectors";
export default function Galery() {
  const imagesData = useCastomSelector(ImageDataSelector);
  return (
    <div className={s.galeryBlock}>
      <h3 className={s.title}>Галерея работ</h3>
      <p className={s.text}>
        Вдохновитесь нашими реализованными проектами и найдите идеи для своего
        интерьера
      </p>
      <div className={s.imagesBlock}>
        <div className={s.firstCol}>
          {imagesData.data.slice(3, 5).map((el) => (
            <Image el={el} key={el.id} />
          ))}
        </div>
        <div className={s.secondCol}>
          {imagesData.data.slice(5, 6).map((el) => (
            <Image el={el} key={el.id} />
          ))}
          <div className={s.secondColFoot}>
            <div className={s.secondColFootFirstCol}>
              {imagesData.data.slice(6, 8).map((el) => (
                <Image el={el} key={el.id} />
              ))}
            </div>
            <div className={s.secondColFootSecondCol}>
              {imagesData.data.slice(8, 9).map((el) => (
                <Image el={el} key={el.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
