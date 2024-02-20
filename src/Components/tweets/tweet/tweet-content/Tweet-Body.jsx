import TweetImage from "./tweet-body/Tweet-Image";
import TweetText from "./tweet-body/Tweet-Text";
import TweetTitle from "./tweet-body/Tweet-Title";

export default function TweetBody() {

    return (
        <div className="tweet-body">
            <TweetTitle/>
            <TweetText/>
            <TweetImage/>
        </div>
    )
}