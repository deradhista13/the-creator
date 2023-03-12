import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "../pages/details";
import Favorite from "../pages/favorite";
import Homepage from "../pages/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/detail_profil",
    element: <Details />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
