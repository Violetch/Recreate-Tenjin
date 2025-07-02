import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { FEATURED_COLLECTION } from "../../constants/shopContent";

const Cart = () => {
  return (
    <section className="flex flex-col justify-center items-center py-[60px] gap-15">
      <div className="flex flex-col items-center gap-15">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-[2.6em] font-semibold">Your cart is empty</h1>
          <button className="bg-neutral-900 text-white px-7 py-3 hover:scale-105 hover:shadow-xl duration-200">
            Continue shopping
          </button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-2xl font-semibold">Have an account?</h3>
          <p className="">
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
        <ul className="flex justify-center gap-3">
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
                  className="shadow-neutral-300 w-full max-w-[340px]"
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
