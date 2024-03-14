import React from "react";
import SearchBar from "./trends/SearchBar";
import TrendList from "./trends/TrendList";

export default function Trends() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center",alignItems:"center" }}>
        <SearchBar />
        <TrendList/>
      </div>
    </div>
  );
}
