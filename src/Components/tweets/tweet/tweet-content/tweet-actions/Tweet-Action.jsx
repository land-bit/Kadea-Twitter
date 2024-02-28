export default function TweetAction({ action },) {
    console.log(action.logo + " " + action.nbr);
    return (
        <div className="tweet-action">
            {action.logo} {action.nbr && " " + action.nbr}
        </div>
    )
}