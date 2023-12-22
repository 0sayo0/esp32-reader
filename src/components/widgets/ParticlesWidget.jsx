const ParticlesWidget = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center max-w-2xl mx-auto md:mt-0 mt-16 md:gap-0 gap-10">
        <div className="flex justify-center items-center text-center -m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-topology-star-ring-3"
            width="68"
            height="68"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ff9300"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
            <path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
            <path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
            <path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
            <path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
            <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
            <path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
            <path d="M6 12h4" />
            <path d="M14 12h4" />
            <path d="M15 7l-2 3" />
            <path d="M9 7l2 3" />
            <path d="M11 14l-2 3" />
            <path d="M13 14l2 3" />
            <path d="M10 5h4" />
            <path d="M10 19h4" />
            <path d="M17 17l2 -3" />
            <path d="M19 10l-2 -3" />
            <path d="M7 7l-2 3" />
            <path d="M5 14l2 3" />
          </svg>
          <h2 className="font-bold md:text-4xl text-2xl text-neutral-400">
            Partículas
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

export default ParticlesWidget;
