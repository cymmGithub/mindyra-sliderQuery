import { useUser } from "../../hooks/useUser";

import "./AvatarImg.css";

interface Props {
  userName: string;
}

export const AvatarImg = ({ userName }: Props) => {
  const { user, isLoading, isError } = useUser(userName);

  if (isLoading)
    return (
      <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
    );
  if (isError) return <p>Something went wrong...:(</p>;
  return <img className="AvatarImg" src={user.avatar_url} />;
};
