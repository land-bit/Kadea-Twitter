import React from "react";
import Menu from "./navigation/Menu";
import data from "../../data/initial-data.json";
export default function Navigation() {
  return (
    <div className="flex flex-col gap-[2.5vh]">
      {data.nav.map((e, i) => (
        <Menu key={i} donnee={e} />
      ))}
    </div>
  );
}
