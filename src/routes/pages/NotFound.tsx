const NotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-[52vh] lg:min-h-[38vh] gap-12">
      <p className="text-xl font-light">404</p>
      <h1 className="text-5xl font-semibold">Page not found</h1>
      <button className="bg-neutral-900 tracking-wider text-neutral-100 px-8 py-3">
        Continue shopping
      </button>
    </section>
  );
};

export default NotFound;
