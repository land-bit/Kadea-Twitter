import { useContext, useState } from "react";
import Comment from "../../../../icons/Comment";
import Like from "../../../../icons/Like";
import Retweet from "../../../../icons/Retweet";
import Share from "../../../../icons/Share";
import TweetAction from "./tweet-actions/Tweet-Action";
import { Context } from "../../../../contexts/tweets";

export default function TweetActions() {
  const [state, setState] = useState(Array(4).fill(false));
  const tweet = useContext(Context);
  const [action, setAction] = useState(Array(4).fill(false));

  const verify = (id) => {
    const newSvg = state.slice();
    newSvg[id] = !newSvg[id];
    setState(newSvg);
  };
  const handleClick = () => {
    const newAction = action.slice();
    newAction[2] = !newAction[2];
    setAction(newAction);
  };
  const acts = [
    {
      logo: (
        <Comment
          Csvg={state[0] ? "#1d52f022" : ""}
          color={state[0] ? "#1d52f0" : "#6E767D"}
        />
      ),
      nbr: tweet.actions.comments,
      title: "Comment",
      color: state[0] ? "#1d52f0" : "#6E767D",
    },

    {
      logo: (
        <Retweet
          Csvg={state[1] ? "#1df04022" : ""}
          color={state[1] ? "#1df040" : "#6E767D"}
        />
      ),
      nbr: tweet.actions.retweet,
      title: "Retweet",
      color: state[1] ? "#1df040" : "#6E767D",
    },
    {
      logo: (
        <Like
          Csvg={state[2] ? "#f8358a22" : ""}
          color={state[2] ? "#f8358a" : "#6E767D"}
          like={action[2]}
        />
      ),
      nbr:
        tweet.actions.like[tweet.actions.like.length - 1] == "k"
          ? tweet.actions.like
          : !action[2]
          ? Number(tweet.actions.like)
          : Number(tweet.actions.like) + 1,
      title: "Like",
      color: state[2] ? "#f8358a" : "#6E767D",
    },
    {
      logo: (
        <Share
          Csvg={state[3] ? "#1d52f022" : ""}
          color={state[3] ? "#1d52f0" : "#6E767D"}
        />
      ),
      title: "Share",
      color: state[3] ? "#1d52f0" : "#6E767D",
    },
  ];

  return (
    <div className="tweet-actions">
      {acts.map((e, i) => (
        <TweetAction
          key={i}
          action={e}
          like={handleClick}
          verify={() => verify(i)}
        />
      ))}
    </div>
  );
}
