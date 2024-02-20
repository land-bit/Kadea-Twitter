import TweetTitleAuthor from "./tweet-title/Tweet-Title-Author";
import TweetTitleDetails from "./tweet-title/Tweet-Title-Details";

export default function TweetTitle() {

    return (
        <div className="tweet-title">
            <TweetTitleAuthor/>
            <TweetTitleDetails/>
        </div>
    )
}