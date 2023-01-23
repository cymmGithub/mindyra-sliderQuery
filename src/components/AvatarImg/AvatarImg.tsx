import { useUser } from "../../hooks/useUser";
import { LoadingError } from "../LoadingError/LoadingError";

import styles from "./AvatarImg.module.css";

interface Props {
  userName: string;
}

export const AvatarImg = ({ userName }: Props) => {
  const { user, isLoading, isError } = useUser(userName);
  if (isLoading) return <div className={styles.loader}></div>;
  if (isError || !user) return <LoadingError />;
  return <img className={styles.img} src={user.avatar_url} alt={user.login} />;
};
