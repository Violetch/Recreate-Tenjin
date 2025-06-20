import {
  FaInstagramSquare,
  FaPaypal,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FOOTER_CONTENT } from "../constants/footerContent";
import { GoArrowRight } from "react-icons/go";

const Footer = () => {
  const newYear = new Date().getFullYear();

  return (
    <div>
      <div className="flex justify-between w-full bg-neutral-900 text-neutral-100 px-[40px] md:px-[50px] py-1 pb-10">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            {FOOTER_CONTENT.map((item, index) => (
              <ul className="flex flex-col pb-10 pt-3 gap-3" key={index}>
                <li className="text-xl font-semibold">{item.title}</li>
                <li className="flex flex-col mt-2 gap-3 text-neutral-400">
                  {Array.isArray(item.desc) ? (
                    <>
                      {item.desc.map((item, index) => (
                        <li
                          className="hover:text-neutral-100 hover:underline cursor-pointer"
                          key={index}
                        >
                          {item.each}
                        </li>
                      ))}
                    </>
                  ) : (
                    <li className="md:w-[clamp(150px,25vw,315px)]">
                      {item.desc}
                    </li>
                  )}
                </li>
              </ul>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center">
            <div className="flex flex-col items-center md:items-start gap-4">
              <h1 className="text-[18px] font-semibold">
                Subscribe to our emails
              </h1>
              <div className="border-neutral-500 border-[1px] hover:border-[2px] relative">
                <input
                  className="w-full max-w-[260px] md:w-[360px] px-5 py-3"
                  type="email"
                  placeholder="Email"
                />
                <GoArrowRight
                  className="absolute inset-y-[14px] inset-x-[88%] md:inset-x-[91%]"
                  size={"19px"}
                />
              </div>
            </div>
            <div className="flex gap-7">
              <FaInstagramSquare className="hover:size-5" size={"19px"} />
              <FaYoutube className="hover:size-5" size={"19px"} />
              <FaTiktok className="hover:size-5" size={"19px"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center min-w-full bg-neutral-900 pb-2 pt-10 gap-3 border border-t-2 border-neutral-800">
        <h1 className="bg-neutral-100 text-blue-800 px-3 py-1 rounded-[3px]">
          <FaPaypal size={"14px"} />
        </h1>
        <p className="text-[12px] text-neutral-300">
          © {newYear}, Tenjin Style & Scrollworks
        </p>
      </div>
    </div>
  );
};

export default Footer;
