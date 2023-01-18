import { useUser } from "../../hooks/useUser";
import { LoadingError } from "../LoadingError/LoadingError";

import "./AvatarImg.css";

interface Props {
  userName: string;
}

export const AvatarImg = ({ userName }: Props) => {
  const { user, isLoading, isError } = useUser(userName);

  if (isLoading) return <div className="AvatarImg__loader"></div>;
  if (isError || !user) return <LoadingError />;
  return <img className="AvatarImg" src={user.avatar_url} />;
};
