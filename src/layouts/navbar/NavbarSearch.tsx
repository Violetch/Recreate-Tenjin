import { useAtom } from "jotai";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { isSearchAtom } from "../../jotai";
import { motion } from "motion/react";

const NavbarSearch = () => {
  const [, setIsSearch] = useAtom(isSearchAtom);

  return (
    <motion.div
      className="flex justify-center items-center absolute inset-x-0 inset-y-0 bg-white py-8 gap-4"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <span className="flex relative">
        <input
          className="w-[765px] border-[1px] border-neutral-600 text-xl px-5 py-2"
          type="text"
          placeholder="Search"
        />
        <IoIosSearch
          className="absolute inset-x-[95%] inset-y-1/2 -translate-y-1/2 hover:scale-110 cursor-pointer"
          size={"23"}
        />
      </span>
      <RxCross1
        className="hover:scale-110 cursor-pointer"
        size={"20px"}
        onClick={() => setIsSearch(false)}
      />
    </motion.div>
  );
};

export default NavbarSearch;
