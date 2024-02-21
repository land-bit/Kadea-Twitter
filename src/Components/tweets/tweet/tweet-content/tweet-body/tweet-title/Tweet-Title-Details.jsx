export default function TweetTitleDetails({name, time}) {

    return(
        <div className="tweet-title-details">
            @{name + ' . ' + time}
        </div>
    )
}