import { fetcher } from "../utils/fetcher";
import useSWR from "swr";

export const useUser = (name: string) => {
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/users/${name}`,
    fetcher
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
};
