import { UserInfoRes } from "../types/user";

export const fetchImg = async (userName: string): Promise<UserInfoRes> => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  const data: UserInfoRes = await response.json();

  return data;
};
