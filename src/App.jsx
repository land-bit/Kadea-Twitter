import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Trends from "./Components/Trends";
import { TweetContext } from "./contexts/tweets";
import json from "./data/initial-data.json";

function App() {
  const data = { ...json };
  return (
    <>
      <TweetContext.Provider value={data}>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="timeline">
          <Outlet />
        </div>
        <div className="trends">
          <Trends />
        </div>
      </TweetContext.Provider>
    </>
  );
}

export default App;
