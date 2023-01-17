import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
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

  return (
    <div className="AvatarSlider__container">
      <FaArrowAltCircleLeft
        className="AvatarSlider__left-arrow"
        onClick={prevSlide}
      />
      <AvatarImg userName={`${userData[current]}`} />
      <FaArrowAltCircleRight
        className="AvatarSlider__right-arrow"
        onClick={nextSlide}
      />
    </div>
  );
};
