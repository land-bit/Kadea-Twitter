import { useState } from "react";
import Comment from "../../../../icons/Comment";
import Like from "../../../../icons/Like";
import Retweet from "../../../../icons/Retweet";
import Share from "../../../../icons/Share";
import TweetAction from "./tweet-actions/Tweet-Action";

export default function TweetActions({ actions }) {
  const [state, setState] = useState(Array(4).fill(false));
  const verify = (i) => {
    const newSvg = state.slice();
    newSvg[i] = !newSvg[i];
    setState(newSvg);
  };
  const acts = [
    {
      logo: (
        <Comment
          Csvg={state[0] ? "#1d52f022" : ""}
          color={state[0] ? "#1d52f0" : "#6E767D"}
        />
      ),
      nbr: actions.comments,
      title: "Comment",
      color: state[0] ? "#1d52f0" : "#6E767D",
    },
    {
      logo: (
        <Like
          Csvg={state[1] && "#1df04022"}
          color={state[1] ? "#1df040" : "#6E767D"}
        />
      ),
      nbr: actions.like,
      title: "Like",
      color: state[1] ? "#1df040" : "#6E767D",
    },
    {
      logo: (
        <Retweet
          Csvg={state[2] && "#f8358a22"}
          color={state[2] ? "#f8358a" : "#6E767D"}
        />
      ),
      nbr: actions.retweet,
      title: "Retweet",
      color: state[2] ? "#f8358a" : "#6E767D",
    },
    {
      logo: (
        <Share
          Csvg={state[3] && "#1d52f022"}
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
        <TweetAction key={i} action={e} verify={() => verify(i)} />
      ))}
    </div>
  );
}
