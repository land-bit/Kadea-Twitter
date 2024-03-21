import React from "react";
import { trends } from "../..";
import { exempleDB } from "../..";
import FolowTitle from "./folow-list/FolowTitle";
import FolowBody from "./folow-list/FolowBody";

export default function FolowList() {
  return (
    <div
      style={{
        backgroundColor: "#202327",
        padding: "0  2vw",
        width: "90%",
        borderRadius: "30px",
        margin: "2vh",
        paddingBottom: "23px",
      }}
    >
      <FolowTitle />
      {trends.map((e, i) => (
        <FolowBody key={i} data={exempleDB[i]} />
      ))}
      <a
        href="#"
        style={{
          color: "#005fa8",
          textDecoration: "none",
        }}
      >
        show more
      </a>
    </div>
  );
}
