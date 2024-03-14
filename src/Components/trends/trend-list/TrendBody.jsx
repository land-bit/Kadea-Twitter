import React from "react";
import more from "/Icons/More (1).svg";

export default function TrendBody() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        className="trend-body"
        style={{
          padding: "10px 0",
        }}
      >
        <p>Trending in Turkey</p>
        <h4>#SQUID</h4>
        <p>2,066 Tweets</p>
      </div>
      <img src={more} alt="" />
    </div>
  );
}
