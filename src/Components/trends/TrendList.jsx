import React from "react";
import TrendTitle from "./trend-list/TrendTitle";
import TrendBody from "./trend-list/TrendBody";
import data from "../../data/initial-data.json";
export default function TrendList() {
  return (
    <div className="bg-[#202327] px-[2.5vw] w-[90%] rounded-[30px] m-[2vh] pb-2">
      <TrendTitle />
      {data.trends.map((e, i) => (
        <TrendBody key={i} />
      ))}
      <a href="#" className="link text-[#005fa8]">
        show more
      </a>
    </div>
  );
}
