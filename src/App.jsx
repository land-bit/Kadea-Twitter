import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Trends from "./Components/Trends";
import TweetContext from "./contexts/tweets";

function App() {
  return (
    <>
      <TweetContext>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="timeline">
          <Outlet />
        </div>
        <div className="trends">
          <Trends />
        </div>
      </TweetContext>
    </>
  );
}

export default App;
