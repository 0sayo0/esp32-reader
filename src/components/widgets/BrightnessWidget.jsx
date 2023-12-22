const BrightnessWidget = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center max-w-2xl mx-auto md:mt-0 mt-16 md:gap-0 gap-10">
        <div className="flex justify-center items-center text-center -m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-bulb"
            width="68"
            height="68"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffec00"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
            <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
            <path d="M9.7 17l4.6 0" />
          </svg>
          <h2 className="font-bold md:text-4xl text-2xl text-neutral-400">
            Luminosidad
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

export default BrightnessWidget;
