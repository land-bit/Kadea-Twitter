import React from "react";
import more from "/Icons/More (1).svg";

export default function TrendBody() {
  return (
    <div className="flex justify-between py-1">
      <div className="text-[gray] text-sm">
        <p>Trending in Turkey</p>
        <h4 className="text-slate-300 text-base">#SQUID</h4>
        <p>2,066 Tweets</p>
      </div>
      <img src={more} alt="" />
    </div>
  );
}
