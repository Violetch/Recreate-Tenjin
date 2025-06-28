import { useAtom } from "jotai";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { isSearchAtom } from "../../jotai";

const NavbarSearch = () => {
  const [isSearch, setIsSearch] = useAtom(isSearchAtom);

  return (
    <div className="flex justify-center items-center bg-white py-8 gap-4">
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
    </div>
  );
};

export default NavbarSearch;
