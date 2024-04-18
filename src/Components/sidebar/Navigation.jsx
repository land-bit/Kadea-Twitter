import React, { useContext } from "react";
import Menu from "./navigation/Menu";
import { Context } from "../../contexts/tweets";
export default function Navigation() {
  const { nav } = useContext(Context);
  return (
    nav && (
      <div className="flex flex-col gap-[2.5vh]">
        {nav.map((e, i) => (
          <Menu key={i} donnee={e} />
        ))}
      </div>
    )
  );
}
