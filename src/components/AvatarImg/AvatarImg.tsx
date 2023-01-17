import { useUser } from "../../hooks/useUser";

import "./AvatarImg.css";

interface Props {
  userName: string;
}

export const AvatarImg = ({ userName }: Props) => {
  const { user, isLoading, isError } = useUser(userName);

  if (isLoading) return <div className="loader"></div>;
  if (isError) return <p>Something went wrong...:(</p>;
  return <img className="AvatarImg" src={user.avatar_url} />;
};
