import Tweet from "./tweets/Tweet";
import data from "../data/initial-data.json";

export default function Tweets() {
  return (
    <div className="tweets">
      {data.tweets.map((e, i) => (
        <Tweet key={i} data={e} />
      ))}
    </div>
  );
}
