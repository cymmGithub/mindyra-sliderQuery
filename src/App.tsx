import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AvatarSlider } from "./components/AvatarSlider/AvatarSlider";
import { usersData } from "./db/usersData";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AvatarSlider userData={usersData} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
