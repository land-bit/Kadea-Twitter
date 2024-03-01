import TweetImage from "./tweet-body/Tweet-Image";
import TweetText from "./tweet-body/Tweet-Text";
import TweetTitle from "./tweet-body/Tweet-Title";

export default function TweetBody({ user, content }) {
    return (
        <div className="tweet-body">
            <TweetTitle name={user.name} userName={user.userName} time={user.time} />
            <TweetText text={content.text} />
            {content && content.srcImage && <TweetImage image={content.srcImage} />}
        </div>
    )
}