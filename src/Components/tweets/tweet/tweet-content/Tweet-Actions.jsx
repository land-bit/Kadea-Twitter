import Comment from "../../../../icons/Comment";
import Like from "../../../../icons/Like";
import Retweet from "../../../../icons/Retweet";
import Share from "../../../../icons/Share";
import TweetAction from "./tweet-actions/Tweet-Action";

export default function TweetActions({ actions }) {
  const acts = [
    {
      logo: <Comment size={18} color={"#6E767D"} />,
      nbr: actions.comments,
    },
    {
      logo: <Like size={18} color={"#6E767D"} />,
      nbr: actions.like,
    },
    {
      logo: <Retweet size={20} color={"#6E767D"} />,
      nbr: actions.retweet,
    },
    {
      logo: <Share size={18} color={"#6E767D"} />,
    },
  ];
  return (
    <div className="tweet-actions">
      {acts.map((e, i) => (
        <TweetAction key={i} action={e} />
      ))}
    </div>
  );
}
