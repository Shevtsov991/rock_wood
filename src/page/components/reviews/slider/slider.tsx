import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useCastomSelector } from "../../../../hooks/store";
import { ReviewsDataSelector } from "../../../../store/selectors";
import s from "../reviews.module.scss";

export const Slider = () => {
  const carousel = useRef<AliceCarousel>(null);

  const reviewsData = useCastomSelector(ReviewsDataSelector);
  const resultArr = reviewsData.data.slice(0, 6);

  let items: Array<any> = [];

  if (resultArr[0] !== undefined) {
    items = [
      <div className={s.card}>
        <p>{resultArr[0].body}</p>
        <span>{resultArr[0].name}</span>
      </div>,
      <div className={s.card}>
        <p>{resultArr[1].body}</p>
        <span>{resultArr[1].name}</span>
      </div>,
      <div className={s.card}>
        <p>{resultArr[2].body}</p>
        <span>{resultArr[2].name}</span>
      </div>,
      <div className={s.card}>
        <p>{resultArr[3].body}</p>
        <span>{resultArr[3].name}</span>
      </div>,
      <div className={s.card}>
        <p>{resultArr[4].body}</p>
        <span>{resultArr[4].name}</span>
      </div>,
      <div className={s.card}>
        <p>{resultArr[5].body}</p>
        <span>{resultArr[5].name}</span>
      </div>,
    ];
  }
  return (
    <div className={s.carousel}>
      <button
        className={s.prevBtn}
        onClick={(e) => carousel?.current?.slidePrev(e)}
      >{`<`}</button>
      <AliceCarousel
        key="carousel"
        mouseTracking
        disableDotsControls
        disableButtonsControls
        items={items}
        responsive={{ 1024: { items: 3 } }}
        ref={carousel}
        infinite
      />
      <button
        className={s.nextBtn}
        onClick={(e) => carousel?.current?.slideNext(e)}
      >{`>`}</button>
    </div>
  );
};
