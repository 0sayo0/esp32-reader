const TempWidget = () => {
  return (
    <>
      <div className="flex justify-between items-center max-w-2xl mx-auto">
        <div className=" flex justify-center items-center text-center -m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-temperature"
            width="68"
            height="68"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ff2825"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
            <path d="M10 9l4 0" />
          </svg>
          <h2 className="font-bold text-4xl text-neutral-400">Temperatura</h2>
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

export default TempWidget;
