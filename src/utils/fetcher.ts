type Args = [RequestInfo | URL];

export const fetcher = (...args: Args) =>
  fetch(...args).then((res) => res.json());
