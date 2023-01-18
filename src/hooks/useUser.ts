import { fetcher } from "../utils/fetcher";
import useSWR from "swr";
import { UserInfo } from "../types/user";

export const useUser = (name: string) => {
  const { data, error, isLoading } = useSWR<UserInfo, Error>(
    `https://api.github.com/users/${name}`,
    fetcher
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
};
