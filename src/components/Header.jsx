const Header = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 md:mt-4 md:max-w-7xl mx-auto">
        <img
          className="h-24 mb-10 md:h-32 md:mb-0"
          src="/logo-removebg.png"
          alt="imagen-cmnm"
        />
        <div>
          <h1 className="font-bold md:text-4xl text-2xl text-neutral-300 text-center">
            CENTRO DE NANOCIENCIAS Y MICRO Y NANOTECNOLOGÍA
          </h1>
          <p className="font-bold md:text-2xl text-xl text-neutral-300 text-center md:mt-4 mt-5">
            SISTEMA DE MONITOREO
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
