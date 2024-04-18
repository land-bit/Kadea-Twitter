import React, { useContext } from "react";
import TrendTitle from "./trend-list/TrendTitle";
import TrendBody from "./trend-list/TrendBody";
import { Context } from "../../contexts/tweets";
export default function TrendList() {
  const { trends } = useContext(Context);
  return (trends&&
    <div className="bg-[#202327] px-[2.5vw] w-[90%] rounded-[30px] m-[2vh] pb-2">
      <TrendTitle />
      {trends.map((e, i) => (
        <TrendBody key={i} />
      ))}
      <a href="#" className="link text-[#005fa8]">
        show more
      </a>
    </div>
  );
}
