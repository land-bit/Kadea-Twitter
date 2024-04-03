import { useContext } from "react";
import { Link } from "react-router-dom";
import { TweetContext } from "../../../contexts/tweets";

export default function TweetAvatar() {
  const user = useContext(TweetContext);
  return (
    <Link to={`/${user.user.userName}`}>
      <img src={user.user.src} alt="Profil de ..." className="tweet-avatar" />
    </Link>
  );
}
