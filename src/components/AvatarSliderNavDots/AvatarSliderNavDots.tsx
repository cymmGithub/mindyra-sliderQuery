import { BsDot } from "react-icons/bs";

import "./AvatarSliderNavDots.css";

interface Props {
  userData: string[];
  currentSlideIndex: number;
  onDotClick: (index: number) => void;
}

export const AvatarSliderNavDots = ({
  userData,
  currentSlideIndex,
  onDotClick,
}: Props) => {
  return (
    <div className="AvatarSlider__dot-container">
      {userData.map((user, index) => (
        <BsDot
          onClick={() => onDotClick(index)}
          key={index}
          className={
            index === currentSlideIndex
              ? "AvatarSlider__dot-active"
              : "AvatarSlider__dot"
          }
        />
      ))}
    </div>
  );
};
