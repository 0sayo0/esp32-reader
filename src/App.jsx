import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-between items-center max-w-7xl mx-auto mt-10">
        <Navbar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
