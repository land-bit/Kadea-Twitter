import { useContext } from "react";
import { TweetContext } from "../../../../../contexts/tweets";

export default function TweetText({ text }) {
  const tweet = useContext(TweetContext);
  return <p className="tweet-text">{tweet.content.text}</p>;
}
