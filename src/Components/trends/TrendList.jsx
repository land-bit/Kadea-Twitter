import React from "react";
import TrendTitle from "./trend-list/TrendTitle";
import TrendBody from "./trend-list/TrendBody";
import { trends } from "../..";

export default function TrendList() {
  return (
    <div
      style={{
        backgroundColor: "#202327",
        padding: "0  2.5vw",
        width: "90%",
        borderRadius: "30px",
        margin: "2vh",
        paddingBottom: "20px",
      }}
    >
      <TrendTitle />
      {trends.map((e, i) => (
        <TrendBody key={i} />
      ))}
      <a
        href="#"
        style={{
          color: "blue",
          textDecoration: "none",
        }}
      >
        show more
      </a>
    </div>
  );
}
