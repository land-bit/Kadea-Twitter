import React, { useContext, useState } from "react";
import Tweets from "../Components/Tweets";
import TweetEditor from "../Components/Tweet-Editor";
import Header from "../Components/Header";
import { TweetContext } from "../contexts/tweets";

export default function Timeline() {
  const { tweets } = useContext(TweetContext);
  const [tab, setTab] = useState(tweets);
  return (
    <div>
      <Header />
      <TweetEditor tweets={tab} setTweets={setTab} />
      <Tweets tweets={tweets} />
    </div>
  );
}
