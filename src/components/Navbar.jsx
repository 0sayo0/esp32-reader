const Navbar = ({ setActiveView, resetDashboard }) => {
  return (
    <>
      <div className="flex flex-col bg-[#414858] shadow-lg h-[400px] rounded-xl gap-10 px-14">
        <button
          className="font-bold text-2xl text-neutral-200 hover:text-sky-500 border-b border-transparent hover:border-b-sky-500 transition-all text-center mt-10"
          onClick={resetDashboard}
        >
          Inicio
        </button>
        <button className="font-bold text-2xl text-neutral-200 hover:text-sky-500 border-b border-transparent hover:border-b-sky-500 transition-all text-center">
          Cuartos <br /> limpios
        </button>
        <button className="font-bold text-2xl text-neutral-200 hover:text-sky-500 border-b border-transparent hover:border-b-sky-500 transition-all text-center mb-10">
          Cuartos
        </button>
      </div>
    </>
  );
};

export default Navbar;
