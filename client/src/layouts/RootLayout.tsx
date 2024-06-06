import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";
import Hero from "../components/Hero";

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
