import React from "react";
import { trends } from "../..";
import { exempleDB } from "../..";
import FolowTitle from "./folow-list/FolowTitle";
import FolowBody from "./folow-list/FolowBody";

export default function FolowList() {
  return (
    <div className="bg-[#202327] px-[2vw] w-[90%] rounded-[30px] m-[2vh] pb-2">
      <FolowTitle />
      {trends.map((e, i) => (
        <FolowBody key={i} data={exempleDB[i]} />
      ))}
      <a href="#" className="link text-[#005fa8]">
        show more
      </a>
    </div>
  );
}
