import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Register from "./pages/Register";
import AppContextProvider from "./context/AppContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AddHotel from "./pages/AddHotel";
import ManageHotel from "./pages/ManageHotel";
import EditHotel from "./pages/EditHotel.tsx";



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {index: true, element: <Home />},
        {path: "search", element: <span>Search Page</span>},
        {path: "register", element: <Register />},
        {path: "signin", element: <Login />},
        {path: "add-hotel", element: <AddHotel />}, //todo: add route auth
        {path: "/manage-hotel",children: [
            {index: true, element: <ManageHotel/> },
            {path: ':hotelId', element: <EditHotel />}
          ]}, //todo: add route auth
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
