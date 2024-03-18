import React from "react";
import Tweets from "../Components/Tweets";
import TweetEditor from "../Components/Tweet-Editor";
import Header from "../Components/Header";

export default function Timeline() {
  return (
    <div>
      <Header />
      <TweetEditor />
      <Tweets />
    </div>
  );
}
