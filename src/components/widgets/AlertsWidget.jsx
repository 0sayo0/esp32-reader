const AlertsWidget = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center max-w-2xl mx-auto md:mt-0 mt-16 md:gap-0 gap-10">
        <div className="text-center -m-5">
          <h2 className="font-bold md:text-4xl text-2xl text-neutral-400">
            Alertas
          </h2>
        </div>
        <div className="flex justify-center items-center gap-5">
          <button className="font-bold text-xl text-neutral-300 border-2 border-transparent hover:border-sky-500 transition-all rounded-md p-2">
            Día
          </button>
          <button className="font-bold text-xl text-neutral-300 border-2 border-transparent hover:border-sky-500 transition-all rounded-md p-2">
            Mes
          </button>
          <button className="font-bold text-xl text-neutral-300 border-2 border-transparent hover:border-sky-500 transition-all rounded-md p-2">
            Año
          </button>
        </div>
      </div>
    </>
  );
};

export default AlertsWidget;
