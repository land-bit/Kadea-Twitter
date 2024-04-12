import { useContext } from "react";
import { Link } from "react-router-dom";
import { TweetContext } from "../../contexts/tweets";

export default function Avatars() {
  const { current: avatar } = useContext(TweetContext);
  return (
    <Link to={`/${avatar.userName}`} className="avatar">
      <img src={avatar.src} alt="Profil d'utilisateur" />
    </Link>
  );
}
