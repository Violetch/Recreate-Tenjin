import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
import { motion } from "motion/react";
import { FaInstagramSquare, FaTiktok, FaYoutube } from "react-icons/fa";

export const NavbarBigScreen = () => {
  return (
    <section className="flex flex-col bg-white text-neutral-900">
      <div className="flex justify-center text-sm tracking-wider font-semibold py-2 bg-neutral-900 min-w-full">
        <p className="text-neutral-100 ">
          Welcome to Tenjin Style & Scrollworks Store
        </p>
      </div>
      <div className="flex justify-between min-w-full px-[50px] py-7 border border-b-[1px]">
        <div className="flex justify-between w-full max-w-[1400px] mx-auto">
          <ul className="flex justify-center items-center gap-7">
            <img className="mr-3" src="Tenjin-1.avif" alt="Tenjin" />

            <li className="cursor-pointer">All Products</li>
            <li className="cursor-pointer">Style</li>
            <li className="flex items-center gap-2">
              ScrollWorks
              <span className="cursor-pointer">
                <BsChevronDown size={"11px"} />
              </span>
            </li>
            <li className="cursor-pointer">Discord</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">About Us</li>
          </ul>
          <div className="flex justify-center items-center gap-5">
            <IoIosSearch size={"24px"} />
            <CiUser size={"24px"} />
            <PiShoppingBagOpenThin size={"24px"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const NavbarSmallScreen = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 663px)" });
  const [isMenu, setIsMenu] = useState(false);

  // useEffect(() => {
  //   if (isMenu) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [isMenu]);

  const handleScroll = () => {
    if (isMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  handleScroll();

  return (
    <section className="flex flex-col bg-white text-neutral-900">
      <div className="flex justify-center text-sm tracking-wider font-semibold py-2 bg-neutral-900 min-w-full">
        <p className="text-neutral-100 text-[13px]">
          Welcome to Tenjin Style & Scrollworks Store
        </p>
      </div>
      <div
        className={`flex justify-center min-w-full ${
          isMobile ? "px-[10px]" : "px-[30px]"
        } py-4 border border-b-[1px]`}
      >
        <div className="flex justify-between items-center w-[1400px] mx-auto">
          <RxHamburgerMenu onClick={() => setIsMenu(!isMenu)} size={"24px"} />
          <div className="flex fixed inset-x-0 inset-y-[124px] bg-violet-500 h-screen w-full max-w-[400px]">
            <ul>
              <li className="cursor-pointer">All Products</li>
              <li className="cursor-pointer">Style</li>
              <li className="cursor-pointer">
                Scrollworks
                <span className="cursor-pointer">
                  <BsChevronDown size={"11px"} />
                </span>
              </li>
              <li className="cursor-pointer">Discord</li>
              <li className="cursor-pointer">Contact</li>
              <li className="cursor-pointer">About Us</li>
            </ul>
            <div className="flex mt-auto">
              <FaInstagramSquare className="hover:size-5" size={"19px"} />
              <FaYoutube className="hover:size-5" size={"19px"} />
              <FaTiktok className="hover:size-5" size={"19px"} />
            </div>
          </div>
          <img className="" src="Tenjin-1.avif" alt="Tenjin" />
          <div className="flex justify-center items-center gap-5">
            <IoIosSearch className="cursor-pointer" size={"24px"} />
            {isMobile ? (
              <></>
            ) : (
              <CiUser className="cursor-pointer" size={"24px"} />
            )}
            <PiShoppingBagOpenThin className="cursor-pointer" size={"24px"} />
          </div>
        </div>
      </div>
    </section>
  );
};
