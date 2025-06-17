import { Outlet } from "@tanstack/react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <body className="relative">
      <Navbar />
      <Outlet />
      <Footer />
    </body>
  );
};

export default Layout;
