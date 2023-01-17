import { AvatarSlider } from "./components/AvatarSlider/AvatarSlider";
import { usersData } from "./db/usersData";

export const App = () => {
  return <AvatarSlider userData={usersData} />;
};
