import { TbFaceIdError } from "react-icons/tb";

import "./LoadingError.css";

export const LoadingError = () => {
  return (
    <div className="LoadingError__container">
      Something went wrong, please try again later.
      <TbFaceIdError className="LoadingError__icon" />
    </div>
  );
};
