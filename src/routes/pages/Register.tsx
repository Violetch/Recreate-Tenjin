import { clsx } from "clsx";
import { useMediaQuery } from "react-responsive";
import { INPUT } from "../../constants/registerContent";

const Register = () => {
  const is750 = useMediaQuery({ query: "(max-width: 750px)" });

  return (
    <section className="flex flex-col items-center px-4 py-[30px] gap-8">
      <h1
        className={clsx("text-center font-semibold", {
          "text-[2.6em]": !is750,
          "text-[2em]": is750,
        })}
      >
        Create account
      </h1>
      <div className="flex flex-col items-center gap-5 w-full">
        {INPUT.map((item, index) => (
          <input
            className={clsx(
              "w-full px-5 py-3 border-neutral-500 text-[18px] border hover:border-2 hover:border-neutral-500   ",
              {
                "max-w-[450px]": !is750,
                "max-w-[310px]": is750,
              }
            )}
            key={index}
            type={item.type}
            placeholder={item.ph}
          />
        ))}
      </div>
      <button className="bg-neutral-900 text-white px-7 py-3 hover:scale-105 hover:shadow-xl duration-200">
        Create
      </button>
    </section>
  );
};

export default Register;
