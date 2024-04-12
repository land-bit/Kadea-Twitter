import Tweet from "./tweets/Tweet";

export default function Tweets({ tweets }) {
  const tweet = [...tweets];
  return (
    <div className="tweets">
      {tweet.reverse().map((e, i) => (
        <Tweet key={i} data={e} />
      ))}
    </div>
  );
}
