import React from "react";
import sitting from "/Icons/Settings.svg";

export default function TrendTitle() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 0",
      }}
    >
      <h4>Trends for you</h4>
      <img src={sitting} alt="" />
    </div>
  );
}
