const HumidityWidget = () => {
  return (
    <>
      <div className="flex justify-between items-center max-w-2xl mx-auto">
        <div className=" flex justify-center items-center text-center -m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-droplet-exclamation"
            width="68"
            height="68"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00abfb"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18.602 12.004a6.66 6.66 0 0 0 -.538 -1.127l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546c2.142 1.734 5.092 2.04 7.519 .919" />
            <path d="M19 16v3" />
            <path d="M19 22v.01" />
          </svg>
          <h2 className="font-bold text-4xl text-neutral-400">Humedad</h2>
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

export default HumidityWidget;
