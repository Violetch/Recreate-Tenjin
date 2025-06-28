import { Outlet } from "@tanstack/react-router";
import { useMediaQuery } from "react-responsive";
import NavbarSmallScreen from "./navbar/NavbarSmallScreen";
import NavbarBigScreen from "./navbar/NavbarBigScreen";
import Footer from "./Footer";

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
