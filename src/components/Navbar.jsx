const Navbar = ({ resetDashboard }) => {
  return (
    <>
      <div className="flex flex-col md:bg-[#414858] md:shadow-lg md:h-[400px] md:rounded-xl md:gap-10 gap-8 md:px-14 px-4">
        <button
          className="font-bold md:text-2xl text-xl text-neutral-200 hover:text-sky-500 border-b border-transparent hover:border-b-sky-500 transition-all text-center mt-10"
          onClick={resetDashboard}
        >
          Inicio
        </button>
        <button className="font-bold md:text-2xl text-xl text-neutral-200 hover:text-sky-500 border-b border-transparent hover:border-b-sky-500 transition-all text-center">
          Cuartos <br /> limpios
        </button>
        <button className="font-bold md:text-2xl text-xl text-neutral-200 hover:text-sky-500 border-b border-transparent hover:border-b-sky-500 transition-all text-center md:mb-10 mb-14">
          Cuartos
        </button>
      </div>
    </>
  );
};

export default Navbar;
