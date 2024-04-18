import { createContext, useEffect, useState } from "react";
import useFetch from "../useFetch";

export const Context = createContext(null);

const TweetContext = ({ children }) => {
  const { data: tweetData } = useFetch(
    "https://json-server-from-kadea-tweet.onrender.com/tweets"
  );
  const [tweets, setTweets] = useState(null);
  useEffect(() => setTweets(tweetData), [tweetData]);

  const { data: currentData } = useFetch(
    "https://json-server-from-kadea-tweet.onrender.com/current-user"
  );
  const [current, setCurrent] = useState(null);
  useEffect(() => setCurrent(currentData), [currentData]);

  const { data: navData } = useFetch(
    "https://json-server-from-kadea-tweet.onrender.com/nav"
  );
  const [nav, setNav] = useState(null);
  useEffect(() => setNav(navData), [navData]);

  const { data: trendData } = useFetch(
    "https://json-server-from-kadea-tweet.onrender.com/trends"
  );
  const [trends, setTrend] = useState(null);
  useEffect(() => setTrend(trendData), [trendData]);

  return (
    tweets &&
    current &&
    nav &&
    trends && (
      <Context.Provider value={{ tweets, setTweets, current, nav, trends }}>
        {children}
      </Context.Provider>
    )
  );
};
export default TweetContext;
