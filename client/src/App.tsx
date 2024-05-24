import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

type AppProps = {};

const App = ({}: AppProps) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {index: true, element: <span>Home Page</span>},
        {path: "search", element: <span>Search Page</span>},
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
