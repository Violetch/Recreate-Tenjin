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
    <section className="flex flex-col mt-[25px] w-full">
      <div className="flex flex-col justify-between w-full bg-neutral-900 text-neutral-100 px-[50px] py-1 pb-10">
        <div className="flex flex-col w-[1175px] mx-auto">
          <div className="flex justify-between">
            {FOOTER_CONTENT.map((item, index) => (
              <ul className="flex flex-col pb-10 pt-3 gap-3" key={index}>
                <li className="text-xl font-semibold">{item.title}</li>
                <li className="flex flex-col mt-2 gap-3 text-neutral-400">
                  {Array.isArray(item.desc) ? (
                    <>
                      {item.desc.map((item, index) => (
                        <li
                          className="hover:underline hover:underline-offset-3 cursor-pointer hover:text-neutral-100"
                          key={index}
                        >
                          {item.each}
                        </li>
                      ))}
                    </>
                  ) : (
                    <li>{item.desc}</li>
                  )}
                </li>
              </ul>
            ))}
          </div>
          <div className="flex justify-between items-center bg-neutral-900">
            <div className="flex flex-col gap-4">
              <h1 className="text-[18px] font-semibold">
                Subscribe to our emails
              </h1>
              <div className="relative">
                <input
                  className="w-[360px] px-5 py-3 border-neutral-400 border-[1px] hover:border-[2px]"
                  type="email"
                  placeholder="Email"
                />
                <GoArrowRight
                  className="absolute text-neutral-300 inset-y-[15px] inset-x-[90%]"
                  size={"20px"}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <FaInstagramSquare className="hover:size-[21px]" size={"19px"} />
              <FaTiktok className="hover:size-[21px]" size={"19px"} />
              <FaYoutube className="hover:size-[21px]" size={"19px"} />
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
    </section>
  );
};

export default Footer;
