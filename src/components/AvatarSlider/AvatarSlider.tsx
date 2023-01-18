import React, { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { AvatarImg } from "../AvatarImg/AvatarImg";

import "./AvatarSlider.css";

interface Props {
  userData: string[];
}

export const AvatarSlider = ({ userData }: Props) => {
  const [current, setCurrent] = useState(0);
  const sliderLength = userData.length;

  const nextSlide = () => {
    setCurrent(current === sliderLength - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? sliderLength - 1 : current - 1);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrent(slideIndex);
  };

  return (
    <div className="AvatarSlider__container">
      <MdArrowBackIosNew
        className="AvatarSlider__left-arrow"
        onClick={prevSlide}
      />
      {userData.map((user, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "AvatarSlider__active-slide"
                : "AvatarSlider__slide"
            }
          >
            {index === current && <AvatarImg userName={user} />}
          </div>
        );
      })}
      <div className="AvatarSlider__dot-container">
        {userData.map((user, index) => (
          <BsDot
            onClick={() => goToSlide(index)}
            key={index}
            className={
              index === current
                ? "AvatarSlider__dot-active"
                : "AvatarSlider__dot"
            }
          />
        ))}
      </div>

      <MdArrowForwardIos
        className="AvatarSlider__right-arrow"
        onClick={nextSlide}
      />
    </div>
  );
};
