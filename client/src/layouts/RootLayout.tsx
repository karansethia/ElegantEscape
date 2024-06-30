import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";

type RootLayoutProps = {};

const RootLayout = ({}: RootLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
