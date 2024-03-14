import React from "react";
import search from "/Icons/Group.svg";

export default function SearchBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6%",
        backgroundColor: "#202327",
        padding: "0  2vw",
        width: "90%",
        borderRadius: "30px",
        margin: "2vh",
      }}
    >
      <img src={search} alt="" />
      <input
        className="input"
        type="text"
        placeholder="Search"
        style={{
          backgroundColor: "transparent",
          border: "none",
          height: "3.5vw",
          fontSize: "15px",
          color: "gray",
          outline: "none",
        }}
      />
    </div>
  );
}
