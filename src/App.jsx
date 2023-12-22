import { useState, useCallback } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  const [activeView, setActiveView] = useState("dashboard");
  const [key, setKey] = useState(0); // Añade una clave para forzar la reconstrucción del componente

  // Función para restablecer el Dashboard
  const resetDashboard = useCallback(() => {
    setActiveView("dashboard");
    setKey((prevKey) => prevKey + 1); // Aumenta la clave para forzar la reconstrucción
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-between items-center max-w-7xl mx-auto mt-10">
        <Navbar setActiveView={setActiveView} resetDashboard={resetDashboard} />
        {activeView === "dashboard" && <Dashboard key={key} />}
      </div>
    </>
  );
}

export default App;
