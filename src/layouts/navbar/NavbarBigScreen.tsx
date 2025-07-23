import { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { Link } from "@tanstack/react-router";
import { useAtom } from "jotai";
import { isSearchAtom } from "../../jotai";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "motion/react";
import NavbarSearch from "./NavbarSearch";

export const NavbarBigScreen = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [isSearch, setIsSearch] = useAtom<boolean>(isSearchAtom);
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
  }, [lastScrollY, navbarHeight]);

  return (
    <>
      <section
        className="flex flex-col bg-white text-neutral-900"
        ref={navbarRef}
      >
        <div className="flex justify-center text-sm tracking-wider font-semibold py-2 bg-neutral-900 min-w-full">
          <p className="text-neutral-100">
            Welcome to Tenjin Style & Scrollworks Store
          </p>
        </div>

        <div
          className={clsx(
            "flex justify-between relative overflow-hidden min-w-full px-[50px] border border-b-[1px]",
            {
              "py-14": isSearch,
              "py-7": !isSearch,
            }
          )}
        >
          {isSearch ? (
            <NavbarSearch />
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex justify-between w-full max-w-[1400px] mx-auto"
              >
                <ul className="flex justify-center items-center gap-7">
                  <Link to="/" aria-label="Go to Home">
                    <img className="mr-3" src="Tenjin-1.avif" alt="Tenjin" />
                  </Link>
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
                  <IoIosSearch
                    className="hover:scale-110 cursor-pointer"
                    size={"24px"}
                    aria-label="Search"
                    onClick={() => setIsSearch(true)}
                  />
                  <Link to="/account/login" aria-label="Go to Login">
                    <CiUser
                      className="hover:scale-110 cursor-pointer"
                      size={"24px"}
                    />
                  </Link>
                  <Link to="/cart">
                    <PiShoppingBagOpenThin
                      className="hover:scale-110 cursor-pointer"
                      size={"27px"}
                      aria-label="Go to Cart"
                    />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {showFixedNavbar && (
        <section className="flex flex-col fixed inset-x-0 bg-white text-neutral-900 transition-all duration-300 z-50">
          <div className="flex justify-between min-w-full relative overflow-hidden px-[50px] py-7 border border-b-[1px]">
            {isSearch && <NavbarSearch />}
            <div className="flex justify-between w-full max-w-[1400px] mx-auto">
              <ul className="flex justify-center items-center gap-7">
                <Link to="/" aria-label="Go to Home">
                  <img className="mr-3" src="Tenjin-1.avif" alt="Tenjin" />
                </Link>
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
                <IoIosSearch
                  className="hover:scale-110 cursor-pointer"
                  size={"24px"}
                  onClick={() => setIsSearch(true)}
                />
                <Link to="/account/login" aria-label="Go to Login">
                  <CiUser
                    className="hover:scale-110 cursor-pointer"
                    size={"24px"}
                  />
                </Link>
                <Link to="/cart">
                  <PiShoppingBagOpenThin
                    className="hover:scale-110 cursor-pointer"
                    size={"27px"}
                    aria-label="Go to Cart"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default NavbarBigScreen;
