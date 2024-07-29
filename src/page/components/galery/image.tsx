import React from "react";
import { IImageData } from "../../../types/templates";
import s from "./galery.module.scss";
import "./imageStyle.scss";
interface props {
  el: IImageData;
}
export default function Image({ el }: props) {
  return (
    <div className={s.imgAndBtn} id={`block${el.id}`}>
      <button className={s.btn} id={`btnID${el.id}`}>
        title<span>{`>`}</span>
      </button>
      <img src={el.url} alt={el.title} className={s.img} id={`img${el.id}`} />
    </div>
  );
}
