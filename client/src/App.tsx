import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Register from "./pages/Register";

type AppProps = {};

const App = ({}: AppProps) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {index: true, element: <span>Home Page</span>},
        {path: "search", element: <span>Search Page</span>},
        {path: "register", element: <Register />},
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
