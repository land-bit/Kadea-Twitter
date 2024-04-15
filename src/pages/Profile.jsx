import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../contexts/tweets";
import Tweet from "../Components/tweets/Tweet";

export default function Profile() {
  const { userName } = useParams();
  const { tweets: tweetData } = useContext(Context);
  const tweets = [...tweetData];
  return (
    tweets && (
      <div>
        <h1 className="my-[10vh] mx-auto text-center text-6xl">
          Profil de @{userName}
        </h1>
        {tweets
          .reverse()
          .filter((e) => e.user.userName == userName)
          .map((el, i) => (
            <Tweet key={i} data={el} />
          ))}
      </div>
    )
  );
}
