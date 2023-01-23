import { BsDot } from "react-icons/bs";

import styles from "./AvatarSliderNavDots.module.css";

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
    <div className={styles.dotContainer}>
      {userData.map((user, index) => (
        <BsDot
          onClick={() => onDotClick(index)}
          key={index}
          className={
            index === currentSlideIndex ? styles.dotActive : styles.dot
          }
        />
      ))}
    </div>
  );
};
