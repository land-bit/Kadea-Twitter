import TweetActions from "./tweet-content/Tweet-Actions"
import TweetBody from "./tweet-content/Tweet-Body"

export default function TweetContent({data}) {
    console.log(data)
    return(
        <div className="tweet-content">
            <TweetBody user = {data.user} content = {data.content}/>
            <TweetActions/>
        </div>
    )
}