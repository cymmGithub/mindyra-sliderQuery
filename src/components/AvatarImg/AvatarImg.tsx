import { useQuery } from "@tanstack/react-query";
import { LoadingError } from "../LoadingError/LoadingError";

import styles from "./AvatarImg.module.css";

interface Props {
  userName: string;
  userId: number;
}

// export const AvatarImg = ({ userName }: Props) => {
//   const { user, isLoading, isError } = useUser(userName);
//   if (isLoading) return <div className={styles.loader}></div>;
//   if (isError || !user) return <LoadingError />;
//   return <img className={styles.img} src={user.avatar_url} alt={user.login} />;
// };

const fetchImg = async (userName: string) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  const data = await response.json();
  return data;
};

export const AvatarImg = ({ userName, userId }: Props) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["avatarImg", userId],
    queryFn: () => fetchImg(userName),
  });

  if (isLoading) return <div className={styles.loader}></div>;
  if (isError) return <LoadingError />;

  return <img className={styles.img} src={data.avatar_url} alt={data.login} />;
};
