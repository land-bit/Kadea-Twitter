import { useContext } from "react";
import TweetImage from "./tweet-body/Tweet-Image";
import TweetText from "./tweet-body/Tweet-Text";
import TweetTitle from "./tweet-body/Tweet-Title";
import { Context } from "../../../../contexts/tweets";

export default function TweetBody() {
  const tweet = useContext(Context);
  return (
    <div className="tweet-body">
      <TweetTitle />
      <TweetText />
      {tweet.content.srcImage && <TweetImage image={tweet.content.srcImage} />}
    </div>
  );
}
