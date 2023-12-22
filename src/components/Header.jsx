const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center mt-4 max-w-7xl mx-auto">
        <img className="h-32" src="/logo-removebg.png" alt="imagen-cmnm" />
        <div>
          <h1 className="font-bold text-4xl text-neutral-300 text-center">
            CENTRO DE NANOCIENCIAS Y MICRO Y NANOTECNOLOGÍA
          </h1>
          <p className="font-bold text-2xl text-neutral-300 text-center mt-4">
            SISTEMA DE MONITOREO
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
