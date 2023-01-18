import { AvatarSlider } from "./components/AvatarSlider/AvatarSlider";
import { LoadingError } from "./components/LoadingError/LoadingError";
import { usersData } from "./db/usersData";

export const App = () => {
  if (!usersData.length) {
    return <LoadingError />;
  }
  return <AvatarSlider userData={usersData} />;
};
