import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Register from "./pages/Register";
import AppContextProvider from "./context/AppContext";
import Signin from "./pages/Signin";

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
        {path: "signin", element: <Signin />},
      ],
    },
  ]);
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
};

export default App;
