import { useQuery } from "@tanstack/react-query";
import { fetchImg } from "../../utils/fetchImg";
import { LoadingError } from "../LoadingError/LoadingError";

import styles from "./AvatarImg.module.css";

interface Props {
  userName: string;
  userId: number;
}

export const AvatarImg = ({ userName, userId }: Props) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["avatarImg", userId],
    queryFn: () => fetchImg(userName),
  });

  if (isLoading) return <div className={styles.loader}></div>;
  if (isError) return <LoadingError />;

  return <img className={styles.img} src={data.avatar_url} alt={data.login} />;
};
