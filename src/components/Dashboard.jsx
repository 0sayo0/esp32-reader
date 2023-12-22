import { useState } from "react";
import TempWidget from "./widgets/TempWidget";
import HumidityWidget from "./widgets/HumidityWidget";
import PressureWidget from "./widgets/PressureWidget";
import ParticlesWidget from "./widgets/ParticlesWidget";
import BrightnessWidget from "./widgets/BrightnessWidget";
import AlertsWidget from "./widgets/AlertsWidget";
import NotesWidget from "./widgets/NotesWidget";

const Dashboard = () => {
  const [activeWidget, setActiveWidget] = useState(null);

  const handleWidgetClick = (widgetName) => {
    setActiveWidget(widgetName);
  };

  const handleBackClick = () => {
    setActiveWidget(null);
  };

  const renderWidget = () => {
    switch (activeWidget) {
      case "temperature":
        return <TempWidget />;
      case "humidity":
        return <HumidityWidget />;
      case "pressure":
        return <PressureWidget />;
      case "particles":
        return <ParticlesWidget />;
      case "brightness":
        return <BrightnessWidget />;
      case "alerts":
        return <AlertsWidget />;
      case "notes":
        return <NotesWidget />;

      default:
        return <div>Selecciona un widget</div>;
    }
  };

  return (
    <>
      {!activeWidget && (
        <div className=" grid grid-cols-3 justify-end items-center gap-14">
          <button
            className="flex flex-col bg-[#414858] hover:shadow-lg hover:shadow-sky-700 hover:-translate-y-3 duration-200 justify-center items-center h-52 w-72 rounded-xl"
            onClick={() => handleWidgetClick("temperature")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-temperature"
              width="80"
              height="80"
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
            <p className="text-xl text-neutral-200">Temperatura</p>
          </button>

          <button
            className="flex flex-col bg-[#414858] hover:shadow-lg hover:shadow-sky-700 hover:-translate-y-3 duration-200 justify-center items-center h-52 w-72 rounded-xl"
            onClick={() => handleWidgetClick("humidity")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-droplet-exclamation"
              width="80"
              height="80"
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
            <p className="text-xl text-neutral-200">Humedad</p>
          </button>

          <button
            className="flex flex-col bg-[#414858] hover:shadow-lg hover:shadow-sky-700 hover:-translate-y-3 duration-200 justify-center items-center h-52 w-72 rounded-xl"
            onClick={() => handleWidgetClick("pressure")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-gauge"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#00b341"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M13.41 10.59l2.59 -2.59" />
              <path d="M7 12a5 5 0 0 1 5 -5" />
            </svg>
            <p className="text-xl text-neutral-200">Presión</p>
          </button>

          <button
            className="flex flex-col bg-[#414858] hover:shadow-lg hover:shadow-sky-700 hover:-translate-y-3 duration-200 justify-center items-center h-52 w-72 rounded-xl"
            onClick={() => handleWidgetClick("particles")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-topology-star-ring-3"
              width="80"
              height="80"
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
            <p className="text-xl text-neutral-200">Partículas</p>
          </button>

          <button
            className="flex flex-col bg-[#414858] hover:shadow-lg hover:shadow-sky-700 hover:-translate-y-3 duration-200 justify-center items-center h-52 w-72 rounded-xl"
            onClick={() => handleWidgetClick("brightness")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-bulb"
              width="80"
              height="80"
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
            <p className="text-xl text-neutral-200">Luminosidad</p>
          </button>

          <div className="flex h-52 w-72 justify-between">
            <button
              className="flex flex-col items-start justify-start text-xl text-neutral-200 bg-[#414858] hover:shadow-lg hover:shadow-sky-700 hover:-translate-y-3 duration-200 p-8 rounded-lg"
              onClick={() => handleWidgetClick("alerts")}
            >
              <p>Alertas</p>
            </button>
            <button
              className="flex flex-col items-start justify-start text-xl text-neutral-200 bg-[#414858] hover:shadow-lg hover:shadow-sky-700 hover:-translate-y-3 duration-200 p-8 rounded-lg"
              onClick={() => handleWidgetClick("notes")}
            >
              <p>Notas</p>
            </button>
          </div>
        </div>
      )}
      {activeWidget && (
        <div className="bg-[#414858] h-[500px] w-[1000px] rounded-xl p-5">
          <button
            className="flex justify-center items-center text-neutral-300 hover:text-sky-500 transition-all"
            onClick={handleBackClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-left"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M5 12l6 6" />
              <path d="M5 12l6 -6" />
            </svg>
            <p className="font-bold">Volver</p>
          </button>
          <div>{renderWidget()}</div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
