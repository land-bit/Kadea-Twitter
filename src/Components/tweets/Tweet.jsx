import TweetAvatar from "./tweet/Tweet-Avatar";
import TweetContent from "./tweet/Tweet-Content";

export default function Tweet({ data }) {
  return (
    <div className="tweet">
      <TweetAvatar data={data} />
      <TweetContent data={data} />
    </div>
  );
}
