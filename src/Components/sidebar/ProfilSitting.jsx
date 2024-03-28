import React from "react";
import profil from "/Avatars/Profile-Photo.png";
import more from "/Icons/More-2.svg";
import privacy from "/Icons/Private.svg";
import { Link } from "react-router-dom";

export default function ProfilSitting() {
  return (
    <div className="w-[72%] absolute flex justify-between bottom-[10px]">
      <Link to="/bradley_" className="flex gap-[10px] link">
        <img src={profil} alt="" />
        <div>
          <p className="flex justify-center">
            Bradley Ortiz
            <img src={privacy} alt="" />
          </p>
          <span className="text-[gray] font-thin">@bradley_</span>
        </div>
      </Link>
      <img src={more} alt="" />
    </div>
  );
}
