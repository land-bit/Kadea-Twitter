import TweetAvatar from "./tweet/Tweet-Avatar";
import TweetContent from "./tweet/Tweet-Content";

export default function Tweet({ data }) {

    return (
        <div className="tweet">
            <TweetAvatar src={data.user.src} />
            <TweetContent data={data} />
        </div>
    )
}