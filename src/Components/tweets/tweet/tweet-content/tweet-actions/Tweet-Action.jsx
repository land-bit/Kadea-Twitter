export default function TweetAction({ action, verify }) {
  return (
    <div
      title={action.title}
      className="tweet-action"
      onMouseEnter={verify}
      onMouseLeave={verify}
      style={{ color: action.color, cursor: "pointer" }}
    >
      {action.logo} {action.nbr && action.nbr}
    </div>
  );
}
