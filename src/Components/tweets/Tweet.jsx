import TweetAvatar from "./tweet/Tweet-Avatar";
import TweetContent from "./tweet/Tweet-Content";

export default function Tweet() {

    return(
        <div className="tweet">
            <TweetAvatar/>
            <TweetContent/>
        </div>
    )
}