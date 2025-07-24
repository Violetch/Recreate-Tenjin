import { RxHamburgerMenu } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "motion/react";
import { FaInstagramSquare, FaTiktok, FaYoutube } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { useAtom } from "jotai";
import { isSearchAtom } from "../../jotai";
import NavbarSearch from "./NavbarSearch";

const NavbarSmallScreen = () => {
  const is663 = useMediaQuery({ query: "(max-width: 663px)" });
  const is748 = useMediaQuery({ query: "(max-width: 748px)" });
  const [isSearch, setIsSearch] = useAtom(isSearchAtom);
  const [isMenu, setIsMenu] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [showFixedNavbar, setShowFixedNavbar] = useState<boolean>(false);
  const [navbarHeight, setNavbarHeight] = useState<number>(0);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 37) {
        setShowFixedNavbar(false);
      } else if (currentScroll > navbarHeight) {
        if (currentScroll < lastScrollY) {
          setShowFixedNavbar(true);
        } else {
          setShowFixedNavbar(false);
        }
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbarHeight, lastScrollY]);

  useEffect(() => {
    isMenu || isSearch
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isMenu, isSearch]);

  return (
    <>
      <section>
        <div className="flex flex-col relative z-50 bg-white" ref={navbarRef}>
          <div className="flex justify-center min-w-full bg-neutral-900 py-2 text-center text-sm font-semibold tracking-wider    ">
            <p className="text-neutral-100 text-[13px]">
              Welcome to Tenjin Style & Scrollworks Store
            </p>
          </div>
          <div
            className={`flex justify-center min-w-full relative overflow-hidden ${
              is663 ? "px-[10px]" : "px-[30px]"
            } py-4 border border-b-[1px]`}
          >
            {isSearch && <NavbarSearch />}

            <div className="flex justify-between items-center w-[1400px] mx-auto">
              <RxHamburgerMenu
                onClick={() => setIsMenu(!isMenu)}
                size={"24px"}
              />
              <Link to="/">
                <img className="mr-3" src="Tenjin-1.avif" alt="Tenjin" />
              </Link>
              <div className="flex justify-center items-center gap-5">
                <IoIosSearch
                  className="hover:scale-110 cursor-pointer"
                  size={"24px"}
                  onClick={() => setIsSearch(true)}
                />
                {!is663 && (
                  <Link to="/account/login">
                    <CiUser
                      className="hover:scale-110 cursor-pointer"
                      size={"24px"}
                    />
                  </Link>
                )}
                <Link to="/cart">
                  <PiShoppingBagOpenThin
                    className="hover:scale-110 cursor-pointer"
                    size={"27px"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isMenu && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
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
                <div className="flex flex-col items-start mt-auto gap-10 px-8 py-8 bg-neutral-100">
                  {is663 && (
                    <div className="flex justify-center gap-2 cursor-pointer group">
                      <Link to="/account/login">
                        <CiUser
                          className="group-hover:scale-110"
                          size={"24px"}
                        />
                      </Link>
                      <p className="text-[16px] font-semibold">Log in</p>
                    </div>
                  )}
                  <div className="flex justify-center gap-6">
                    <FaInstagramSquare
                      className="hover:scale-110"
                      size={"19px"}
                      aria-lebel="Go to instagram"
                    />
                    <FaTiktok
                      className="hover:scale-110"
                      size={"19px"}
                      aria-lebel="Go to Tiktok"
                    />
                    <FaYoutube
                      className="hover:scale-110"
                      size={"19px"}
                      aria-lebel="Go to Youtube"
                    />
                  </div>
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      {showFixedNavbar && (
        <section>
          <div className="flex flex-col fixed inset-x-0 top-0 z-50 bg-white">
            <div
              className={`flex justify-center min-w-full relative overflow-hidden  ${
                is663 ? "px-[10px]" : "px-[30px]"
              } py-4 border border-b-[1px]`}
            >
              {isSearch && <NavbarSearch />}
              <div className="flex justify-between items-center w-[1400px] mx-auto">
                <RxHamburgerMenu
                  onClick={() => setIsMenu(!isMenu)}
                  size={"24px"}
                  aria-lebel="Open hamburger menu"
                />
                <Link to="/">
                  <img className="mr-3" src="Tenjin-1.avif" alt="Tenjin" />
                </Link>
                <div className="flex justify-center items-center gap-5">
                  <IoIosSearch
                    className="hover:scale-110 cursor-pointer"
                    size={"24px"}
                    aria-lebel="Search"
                    onClick={() => setIsSearch(true)}
                  />
                  {!is663 && (
                    <Link to="/account/login" aria-lebel="Go to Login">
                      <CiUser
                        className="hover:scale-110 cursor-pointer"
                        size={"24px"}
                      />
                    </Link>
                  )}
                  <Link to="/cart">
                    <PiShoppingBagOpenThin
                      className="hover:scale-110 cursor-pointer"
                      size={"24px"}
                    />
                  </Link>
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
                  <div className="flex flex-col items-start mt-auto gap-10 px-8 py-8 bg-neutral-100">
                    {is663 && (
                      <Link
                        className="flex justify-center gap-2 cursor-pointer group"
                        to="/account/login"
                        aria-lebel="Go to Login"
                      >
                        <CiUser
                          className="group-hover:scale-110"
                          size={"24px"}
                        />
                        <p className="text-[16px] font-semibold">Log in</p>
                      </Link>
                    )}
                    <div className="flex justify-center gap-6">
                      <FaInstagramSquare
                        className="hover:scale-110"
                        size={"19px"}
                        aria-lebel="Go to Instagram"
                      />
                      <FaTiktok
                        className="hover:scale-110"
                        size={"19px"}
                        aria-lebel="Go to Tiktok"
                      />
                      <FaYoutube
                        className="hover:scale-110"
                        size={"19px"}
                        aria-lebel="Go to Youtube"
                      />
                    </div>
                  </div>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      )}
    </>
  );
};

export default NavbarSmallScreen;
