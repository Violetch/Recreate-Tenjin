import { useAtom } from "jotai";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { isSearchAtom } from "../../jotai";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";
import { clsx } from "clsx";

const NavbarSearch = () => {
  const is748 = useMediaQuery({ query: "(max-width: 748px)" });
  const is1030 = useMediaQuery({ query: "(max-width: 1030px)" });
  const [, setIsSearch] = useAtom(isSearchAtom);

  return (
    <motion.div
      className={clsx(
        "flex justify-center items-center w-full absolute inset-x-0 inset-y-0 bg-white py-8 gap-4",
        {
          "px-10": is1030 && !is748,
          "px-3": is748,
        }
      )}
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <span className={clsx("flex relative", { "w-full": is1030 })}>
        <input
          className={clsx(
            "w-[765px] border-[1px] border-neutral-600 text-xl px-5 py-2",
            { "w-full": is1030 }
          )}
          type="text"
          placeholder="Search"
        />
        <IoIosSearch
          className="absolute right-3 inset-y-1/2 -translate-y-1/2 hover:scale-110 cursor-pointer"
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
