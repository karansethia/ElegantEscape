import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Outlet} from "react-router-dom";
import Hero from "../Components/Hero";

type RootLayoutProps = {};

const RootLayout = ({}: RootLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto py-10 flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
