import React from "react";
import Buttons from "./sidebar/Buttons";
import Navigation from "./sidebar/Navigation";
import ProfilSitting from "./sidebar/ProfilSitting";

export default function Sidebar() {
  return (
    <div>
      <div className="fixed py-[5vh] px-[5vh] h-screen w-1/4">
        <Navigation />
        <Buttons />
        <ProfilSitting />
      </div>
    </div>
  );
}
