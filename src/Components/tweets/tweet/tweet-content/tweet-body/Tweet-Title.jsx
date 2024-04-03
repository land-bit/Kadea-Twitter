import { Link } from "react-router-dom";
import TweetTitleAuthor from "./tweet-title/Tweet-Title-Author";
import TweetTitleDetails from "./tweet-title/Tweet-Title-Details";
import { useContext } from "react";
import { TweetContext } from "../../../../../contexts/tweets";

export default function TweetTitle() {
  const tweet = useContext(TweetContext);
  return (
    <Link to={`/${tweet.user.userName}`} className="tweet-title link">
      <TweetTitleAuthor name={tweet.user.name} />
      <TweetTitleDetails
        username={tweet.user.userName}
        time={tweet.user.time}
      />
    </Link>
  );
}
