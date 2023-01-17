import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { AvatarSlider } from "./components/AvatarSlider/AvatarSlider";
import { usersData } from "./db/usersData";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<AvatarSlider userData={usersData} />} />
    </Route>
  )
);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
