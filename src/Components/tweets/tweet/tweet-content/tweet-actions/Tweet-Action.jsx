export default function TweetAction({ action, verify }) {
  return (
    <button
      title={action.title}
      className="tweet-action"
      onMouseEnter={verify}
      onMouseLeave={verify}
      style={{ color: action.color }}
    >
      {action.logo} {action.nbr && action.nbr}
    </button>
  );
}
