import React, { useContext } from "react";
import FolowTitle from "./folow-list/FolowTitle";
import FolowBody from "./folow-list/FolowBody";
import { Context } from "../../contexts/tweets";

export default function FolowList() {
  const { trends, tweets } = useContext(Context);
  return (
    trends &&
    tweets && (
      <div className="bg-[#202327] px-[2vw] w-[90%] rounded-[30px] m-[2vh] pb-2">
        <FolowTitle />
        {trends.map((e, i) => (
          <FolowBody key={i} data={tweets[i]} />
        ))}
        <a href="#" className="link text-[#005fa8]">
          show more
        </a>
      </div>
    )
  );
}
