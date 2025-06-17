import Home from "../routes/pages/Home";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <body className="relative">
      <Navbar />
      <Home />
      <Footer />
    </body>
  );
};

export default Layout;
