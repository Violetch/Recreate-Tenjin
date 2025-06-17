import { BsChevronDown } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingBagOpenThin } from "react-icons/pi";

const Navbar = () => {
  return (
    <section className="flex justify-between items-center absolute w-full px-[200px] py-7 text-neutral-100 bg-neutral-900">
      <div>
        <ul className="flex justify-center items-center gap-7">
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
      </div>
      <div className="flex justify-center items-center">
        <IoIosSearch />
        <CiUser />
        <PiShoppingBagOpenThin />
      </div>
    </section>
  );
};

export default Navbar;
