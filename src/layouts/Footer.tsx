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
      <div className="flex flex-col justify-between w-full bg-neutral-900 text-neutral-100 px-[250px] py-1 pb-10">
        <div className="flex justify-between">
          {FOOTER_CONTENT.map((item, index) => (
            <ul className="flex flex-col pb-10 pt-3 gap-3" key={index}>
              <li className="text-xl font-semibold">{item.title}</li>
              <li className="flex flex-col mt-2 gap-3 text-neutral-400">
                {Array.isArray(item.desc) ? (
                  <>
                    {item.desc.map((item, index) => (
                      <li key={index}>{item.each}</li>
                    ))}
                  </>
                ) : (
                  <li>{item.desc}</li>
                )}
              </li>
            </ul>
          ))}
        </div>
        <div className="flex justify-between items-start bg-neutral-900">
          <div className="flex flex-col gap-3">
            <h1 className="text-[18px] font-semibold">
              Subscribe to our emails
            </h1>
            <input
              className="w-[370px] px-5 py-2 border-neutral-400 border-[1px]"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex gap-3">
            <h1>instagram</h1>
            <h1>Youtube</h1>
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
