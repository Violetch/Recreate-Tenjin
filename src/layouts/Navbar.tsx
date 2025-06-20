import { BsChevronDown } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingBagOpenThin } from "react-icons/pi";

const Navbar = () => {
  return (
    <section className="flex flex-col bg-white text-neutral-900">
      <div className="flex justify-center text-sm tracking-wider font-semibold py-2 bg-neutral-900 min-w-full">
        <p className="text-neutral-100 ">
          Welcome to Tenjin Style & Scrollworks Store
        </p>
      </div>
      <div className="flex justify-between min-w-full px-[50px] py-7 border border-b-[1px]">
        <div className="flex justify-between w-[1400px] mx-auto">
          <ul className="flex justify-center items-center gap-7">
            <img className="mr-3" src="Tenjin-1.avif" alt="Tenjin" />

            <li>All Products</li>
            <li>Style</li>
            <li className="flex items-center gap-2">
              ScrollWorks
              <span>
                <BsChevronDown size={"11px"} />
              </span>
            </li>
            <li>Discrod</li>
            <li>Contact</li>
            <li>About Us</li>
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

export default Navbar;
