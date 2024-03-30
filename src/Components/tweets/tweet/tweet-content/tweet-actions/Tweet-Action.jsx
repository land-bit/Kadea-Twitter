export default function TweetAction({ action, verify, like }) {
  return (
    <button
      title={action.title}
      className="tweet-action"
      onMouseEnter={verify}
      onMouseLeave={verify}
      onClick={like}
      style={{ color: action.color }}
    >
      {action.logo} {action.nbr && action.nbr}
    </button>
  );
}
