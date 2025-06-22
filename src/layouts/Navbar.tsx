import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "motion/react";
import { FaInstagramSquare, FaTiktok, FaYoutube } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

export const NavbarBigScreen = () => {
  return (
    <section className="flex flex-col fixed inset-x-0 bg-white text-neutral-900">
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
  const is663 = useMediaQuery({ query: "(max-width: 663px)" });
  const is748 = useMediaQuery({ query: "(max-width: 748px)" });
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    isMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isMenu]);

  return (
    <section className="fixed inset-x-0">
      <div className="flex flex-col relative z-50 bg-white">
        <div className="flex justify-center text-sm tracking-wider font-semibold py-2 bg-neutral-900 min-w-full">
          <p className="text-neutral-100 text-[13px]">
            Welcome to Tenjin Style & Scrollworks Store
          </p>
        </div>
        <div
          className={`flex justify-center min-w-full ${
            is663 ? "px-[10px]" : "px-[30px]"
          } py-4 border border-b-[1px]`}
        >
          <div className="flex justify-between items-center w-[1400px] mx-auto">
            <RxHamburgerMenu onClick={() => setIsMenu(!isMenu)} size={"24px"} />
            <img className="" src="Tenjin-1.avif" alt="Tenjin" />
            <div className="flex justify-center items-center gap-5">
              <IoIosSearch className="cursor-pointer" size={"24px"} />
              {is663 ? (
                <></>
              ) : (
                <CiUser className="cursor-pointer" size={"24px"} />
              )}
              <PiShoppingBagOpenThin className="cursor-pointer" size={"24px"} />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenu && (
          <motion.div
            initial={{ translate: "-100%" }}
            animate={{ translate: 0 }}
            exit={{ translate: "-100%" }}
            transition={{ duration: 0.2 }}
            className={`flex fixed w-full ${
              is748 ? "max-w-[95%]" : "max-w-[400px]"
            } h-screen inset-0 bg-white border border-r-[4px] border-neutral-200 `}
          >
            <ul
              className="flex w-full
         flex-col text-xl  pt-[200px]"
            >
              <li className="cursor-pointer px-8 py-2  hover:bg-neutral-100">
                All Products
              </li>
              <li className="cursor-pointer px-8 py-2  hover:bg-neutral-100">
                Style
              </li>
              <li className="flex justify-between items-center px-8 py-2  cursor-pointer hover:bg-neutral-100">
                Scrollworks
                <span className="cursor-pointer hover:bg-neutral-100">
                  <GoArrowRight />
                </span>
              </li>
              <li className="cursor-pointer px-8 py-2  hover:bg-neutral-100">
                Discord
              </li>
              <li className="cursor-pointer px-8 py-2  hover:bg-neutral-100">
                Contact
              </li>
              <li className="cursor-pointer px-8 py-2  hover:bg-neutral-100">
                About Us
              </li>
              <div className="flex items-center mt-auto gap-6 px-8 py-8 bg-neutral-100">
                <FaInstagramSquare className="hover:scale-110" size={"19px"} />
                <FaTiktok className="hover:scale-110" size={"19px"} />
                <FaYoutube className="hover:scale-110" size={"19px"} />
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <div></div>
    </section>
  );
};
