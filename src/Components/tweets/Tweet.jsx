import { Context } from "../../contexts/tweets";
import TweetAvatar from "./tweet/Tweet-Avatar";
import TweetContent from "./tweet/Tweet-Content";

export default function Tweet({ data }) {
  return (
    <div className="tweet">
      <Context.Provider value={data}>
        <TweetAvatar />
        <TweetContent />
      </Context.Provider>
    </div>
  );
}
