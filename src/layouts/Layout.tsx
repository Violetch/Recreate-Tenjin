import { Outlet } from "@tanstack/react-router";
import Footer from "./Footer";
import { NavbarBigScreen, NavbarSmallScreen } from "./Navbar";
import { useMediaQuery } from "react-responsive";

const Layout = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1030px)" });

  return (
    <main className="flex flex-col relative overflow-x-hidden">
      {isMobile ? <NavbarSmallScreen /> : <NavbarBigScreen />}
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
