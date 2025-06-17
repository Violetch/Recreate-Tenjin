import { FaPaypal } from "react-icons/fa";
import { FOOTER_CONTENT } from "../constants/footerContent";

const Footer = () => {
  const newYear = new Date().getFullYear();

  return (
    <div>
      <div className="flex justify-center w-full bg-neutral-900 text-neutral-100 px-[250px] py-1 ">
        {FOOTER_CONTENT.map((item, index) => (
          <ul className="flex flex-col gap-3" key={index}>
            <li className="text-xl font-semibold">{item.title}</li>
            <li className="flex flex-col mt-1 gap-3">
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
        <div className="flex"></div>
      </div>
      <div className="flex flex-col items-center min-w-full bg-neutral-900 pb-2 pt-10 gap-3 border border-t-2 border-violet-500">
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
