import { Outlet } from "@tanstack/react-router";
import { useMediaQuery } from "react-responsive";
import NavbarSmallScreen from "./navbar/NavbarSmallScreen";
import NavbarBigScreen from "./navbar/NavbarBigScreen";
import Footer from "./Footer";

const Layout = () => {
  const is1030 = useMediaQuery({ query: "(max-width: 1030px)" });

  return (
    <main className="flex flex-col relative overflow-x-hidden">
      {is1030 ? <NavbarSmallScreen /> : <NavbarBigScreen />}
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
