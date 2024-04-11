import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Trends from "./Components/Trends";
import { TweetContext } from "./contexts/tweets";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";

function App() {
  const { data: tweetData } = useFetch("http://localhost:3000/tweets");
  const [tweets, setTweets] = useState(null);
  useEffect(() => setTweets(tweetData), [tweetData]);

  const { data: currentData } = useFetch("http://localhost:3000/current-user");
  const [current, setCurrent] = useState(null);
  useEffect(() => setCurrent(currentData), [currentData]);

  const { data: navData } = useFetch("http://localhost:3000/nav");
  const [nav, setNav] = useState(null);
  useEffect(() => setNav(navData), [navData]);

  const { data: trendData } = useFetch("http://localhost:3000/nav");
  const [trend, setTrend] = useState(null);
  useEffect(() => setTrend(trendData), [trendData]);

  return (
    tweets &&
    current &&
    nav &&
    trend && (
      <>
        <TweetContext.Provider value={{ tweets, current, nav, trend }}>
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
    )
  );
}

export default App;
