import { useContext } from "react";
import Tweet from "./tweets/Tweet";
import { Context } from "../contexts/tweets";

export default function Tweets() {
  const { tweets } = useContext(Context);
  const tweet = [...tweets];
  return (
    <div className="tweets">
      {tweet.reverse().map((e, i) => (
        <Tweet key={i} data={e} />
      ))}
    </div>
  );
}
