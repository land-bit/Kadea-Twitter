import { useContext } from "react";
import { Context } from "../../../../../contexts/tweets";

export default function TweetText({ text }) {
  const tweet = useContext(Context);
  return <p className="tweet-text">{tweet.content.text}</p>;
}
