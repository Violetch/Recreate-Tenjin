import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { FEATURED_COLLECTION } from "../../constants/shopContent";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

const Cart = () => {
  const is990 = useMediaQuery({ query: "(max-width: 990px)" });
  const is748 = useMediaQuery({ query: "(max-width: 748px)" });

  return (
    <section
      className={clsx(
        "flex flex-col justify-center items-center py-[60px] gap-15",
        {
          "px-13": !is748,
          "px-4": is748,
        }
      )}
    >
      <div className="flex flex-col items-center gap-15">
        <div className="flex flex-col items-center gap-6">
          <h1
            className={clsx("text-center  font-semibold", {
              "text-[2.6em]": !is748,
              "text-[2em]": is748,
            })}
          >
            Your cart is empty
          </h1>
          <button className="bg-neutral-900 text-white px-7 py-3 hover:scale-105 hover:shadow-xl duration-200">
            Continue shopping
          </button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-2xl text-center font-semibold">
            Have an account?
          </h3>
          <p className="text-center">
            <Link
              className="underline hover:decoration-[2px] underline-offset-2 cursor-pointer"
              to="/account/login"
            >
              Log in
            </Link>{" "}
            to check out faster.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <h3 className="mr-auto text-2xl font-semibold">Featured collection</h3>
        <ul
          className={clsx("grid gap-1", {
            "grid-cols-4": !is990,
            "grid-cols-2": is990,
          })}
        >
          {FEATURED_COLLECTION.map((item, index) => (
            <li
              className="flex flex-col gap-2 cursor-pointer group"
              key={index}
            >
              <motion.div
                className="overflow-hidden group-hover:shadow-xl duration-300"
                whileHover={{
                  rotate: 1.5,
                  transition: { duration: 1.5 },
                }}
              >
                <motion.img
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className={clsx("shadow-neutral-300 w-full", {
                    "max-w-[340px]": !is990,
                    "max-w-full": is990,
                  })}
                  src={item.img}
                  alt={item.img}
                />
              </motion.div>
              <h5 className="group-hover:underline underline-offset-4">
                {item.title}
              </h5>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>

        <Link
          className="mx-auto bg-neutral-900 text-white px-7 py-3 hover:scale-105 hover:shadow-xl duration-200"
          to="/collection/all"
        >
          View all
        </Link>
      </div>
    </section>
  );
};

export default Cart;
