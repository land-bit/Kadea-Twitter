import React from "react";
import sitting from "/Icons/Settings.svg";

export default function TrendTitle() {
  return (
    <div className="flex justify-between py-[10px]">
      <h4 className="text-lg">Trends for you</h4>
      <img src={sitting} alt="" />
    </div>
  );
}
