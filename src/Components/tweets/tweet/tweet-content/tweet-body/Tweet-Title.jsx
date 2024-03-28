import { Link } from "react-router-dom";
import TweetTitleAuthor from "./tweet-title/Tweet-Title-Author";
import TweetTitleDetails from "./tweet-title/Tweet-Title-Details";

export default function TweetTitle({ name, userName, time }) {
  return (
    <Link to={`/${userName}`} className="tweet-title link">
      <TweetTitleAuthor name={name} />
      <TweetTitleDetails username={userName} time={time} />
    </Link>
  );
}
