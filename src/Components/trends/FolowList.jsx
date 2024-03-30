import React from "react";
import FolowTitle from "./folow-list/FolowTitle";
import FolowBody from "./folow-list/FolowBody";
import data from "../../data/initial-data.json";

export default function FolowList() {
  return (
    <div className="bg-[#202327] px-[2vw] w-[90%] rounded-[30px] m-[2vh] pb-2">
      <FolowTitle />
      {data.trends.map((e, i) => (
        <FolowBody key={i} data={data.tweets[i]} />
      ))}
      <a href="#" className="link text-[#005fa8]">
        show more
      </a>
    </div>
  );
}
