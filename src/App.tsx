import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AvatarSlider } from "./components/AvatarSlider/AvatarSlider";
import { usersData } from "./db/usersData";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AvatarSlider userData={usersData} />
    </QueryClientProvider>
  );
};
