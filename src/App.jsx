import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Trends from "./Components/Trends";
import { TweetContext } from "./contexts/tweets";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  axios
    .get("http://localhost:3000")
    .then((response) => {
      setData(response);
      console.log(response);
    })
    .catch((error) => {
      console.error(error.message);
    });

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
