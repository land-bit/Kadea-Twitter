import React from "react";
import Buttons from "./sidebar/Buttons";
import Navigation from "./sidebar/Navigation";
import ProfilSitting from "./sidebar/ProfilSitting";

export default function Sidebar() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          padding: "5vh 3vw",
          paddingRight: "2vw",
          width: "25%",
          height: "100vh",
        }}
      >
        <Navigation />
        <Buttons />
        <ProfilSitting />
      </div>
    </div>
  );
}
