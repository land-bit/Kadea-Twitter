export default function TweetTitleDetails({ username, time }) {

    return (
        <div className="tweet-title-details">
            @{username + ' . ' + time}
        </div>
    )
}