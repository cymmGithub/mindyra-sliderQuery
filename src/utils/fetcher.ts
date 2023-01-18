import { UserInfo } from "../types/user";

type Args = [RequestInfo | URL];

export const fetcher = (...args: Args): Promise<UserInfo> =>
  fetch(...args).then((res) => res.json());
