import TweetTitleAuthor from "./tweet-title/Tweet-Title-Author";
import TweetTitleDetails from "./tweet-title/Tweet-Title-Details";

export default function TweetTitle({ name, time }) {

    return (
        <div className="tweet-title">
            <TweetTitleAuthor name={name} />
            <TweetTitleDetails name={name} time={time} />
        </div>
    )
}