import Tweet from "./tweets/Tweet";

export default function Tweets({ tweets }) {
  return (
    <div className="tweets">
      {tweets.reverse().map((e, i) => (
        <Tweet key={i} data={e} />
      ))}
    </div>
  );
}
