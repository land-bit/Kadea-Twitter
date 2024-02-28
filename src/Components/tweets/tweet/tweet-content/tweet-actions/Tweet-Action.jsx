export default function TweetAction({ action },) {
    return (
        <div className="tweet-action">
            {action.logo} {action.nbr && " " + action.nbr}
        </div>
    )
}