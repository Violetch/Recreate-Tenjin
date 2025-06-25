import { Link } from "@tanstack/react-router";

const Login = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-10 py-10">
      <h1 className="text-[2.7em] font-semibold">Login</h1>
      <div className="flex flex-col gap-4">
        <input
          className="w-[450px] text-[18px] border hover:border-2 bover:border-neutral-900 border-neutral-500 px-5 py-3"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-[450px] text-[18px] border hover:border-2 bover:border-neutral-900 border-neutral-500 px-5 py-3"
          type="password"
          placeholder="Password"
        />
        <a className="underline underline-offset-3 hover:decoration-2" href="#">
          Forget your password?
        </a>
      </div>
      <div className="flex flex-col items-center gap-4">
        <button className="text-neutral-100 bg-neutral-900 px-9 py-3 hover:scale-105 duration-200">
          Sign in
        </button>
        <Link
          className="underline underline-offset-3 hover:decoration-2"
          to="#"
        >
          Create account
        </Link>
      </div>
    </section>
  );
};

export default Login;
