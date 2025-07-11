import { Link } from "@tanstack/react-router";
import { useMediaQuery } from "react-responsive";
import { clsx } from "clsx";

const Login = () => {
  const is750 = useMediaQuery({ query: "(max-width: 750px)" });

  return (
    <section className="flex flex-col justify-center items-center gap-10 py-10 px-4">
      <h1
        className={clsx("font-semibold", {
          "text-[2.7em]": !is750,
          "text-[2em]": is750,
        })}
      >
        Login
      </h1>
      <div className="flex items-center w-full flex-col gap-4">
        <input
          className={clsx(
            "text-[18px] border hover:border-2 bover:border-neutral-900 border-neutral-500 px-5 py-3",
            {
              "w-[450px]": !is750,
              "w-full max-w-[300px]": is750,
            }
          )}
          type="email"
          placeholder="Email"
        />
        <input
          className={clsx(
            "text-[18px] border hover:border-2 bover:border-neutral-900 border-neutral-500 px-5 py-3",
            {
              "w-[450px]": !is750,
              "w-full max-w-[300px]": is750,
            }
          )}
          type="password"
          placeholder="Password"
        />
        <a className="underline underline-offset-3 hover:decoration-2" href="#">
          Forget your password?
        </a>
      </div>
      <div className="flex flex-col items-center gap-4">
        <button className="text-neutral-100 bg-neutral-900 px-9 py-3 hover:scale-105 hover:shadow-xl duration-200">
          Sign in
        </button>
        <Link
          className="underline underline-offset-3 hover:decoration-2"
          to="/account/register"
        >
          Create account
        </Link>
      </div>
    </section>
  );
};

export default Login;
