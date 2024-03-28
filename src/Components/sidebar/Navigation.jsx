import React from "react";
import Menu from "./navigation/Menu";
import { nav } from "../../../src/index";
export default function Navigation() {
  return (
    <div className="flex flex-col gap-[2.5vh]">
      {nav.map((e, i) => (
        <Menu key={i} donnee={e} />
      ))}
    </div>
  );
}
