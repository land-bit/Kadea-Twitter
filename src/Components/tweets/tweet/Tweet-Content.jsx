import TweetActions from "./tweet-content/Tweet-Actions";
import TweetBody from "./tweet-content/Tweet-Body";

export default function TweetContent() {
  return (
    <div className="tweet-content">
      <TweetBody />
      <TweetActions />
    </div>
  );
}
