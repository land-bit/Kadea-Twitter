import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ donnee }) {
  return (
    <Link to={donnee.path} className="flex items-center gap-4 link text-2xl">
      <span>
        <img src={donnee.logoAfter} alt="" style={{ width: "30px" }} />
      </span>
      <h2 style={{ fontWeight: "100" }}>{donnee.text}</h2>
    </Link>
  );
}
