import React, { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { UserData } from "../../types/user";
import { AvatarImg } from "../AvatarImg/AvatarImg";
import { AvatarSliderNavDots } from "../AvatarSliderNavDots/AvatarSliderNavDots";

import styles from "./AvatarSlider.module.css";

interface Props {
  userData: UserData[];
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
    <div className={styles.container}>
      <MdArrowBackIosNew className={styles.leftArrow} onClick={prevSlide} />
      {userData.map((user, index) => {
        return (
          <div
            key={index}
            className={index === current ? styles.activeSlide : styles.slide}
          >
            {index === current && (
              <AvatarImg userName={user.name} userId={user.id} />
            )}
          </div>
        );
      })}

      <AvatarSliderNavDots
        userData={userData}
        onDotClick={goToSlide}
        currentSlideIndex={current}
      />

      <MdArrowForwardIos className={styles.rightArrow} onClick={nextSlide} />
    </div>
  );
};
