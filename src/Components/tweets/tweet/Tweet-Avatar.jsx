import { Link } from "react-router-dom";

export default function TweetAvatar({ data }) {
  return (
    <Link to={`/${data.user.userName}`}>
      <img src={data.user.src} alt="Profil de ..." className="tweet-avatar" />
    </Link>
  );
}
