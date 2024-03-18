import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Trends from "./Components/Trends";

function App() {
  return (
    <>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="timeline">
        <Outlet />
      </div>
      <div className="trends">
        <Trends />
      </div>
    </>
  );
}

export default App;
