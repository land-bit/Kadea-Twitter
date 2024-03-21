import React from "react";
import profil from "/Avatars/Profile-Photo.png";
import more from "/Icons/More-2.svg";
import privacy from "/Icons/Private.svg";
import { Link } from "react-router-dom";

export default function ProfilSitting() {
  return (
    <div
      style={{
        width: "72%",
        position: "absolute",
        display: "flex",
        justifyContent: "space-between",
        bottom: "10px",
      }}
    >
      <Link
        to="/bradley_"
        style={{
          display: "flex",
          gap: "10px",
          color: "white",
          textDecoration: "none",
        }}
      >
        <img src={profil} alt="" />
        <div>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Bradley Ortiz
            <img src={privacy} alt="" />
          </p>
          <span style={{ color: "gray", fontWeight: "100" }}>@bradley_</span>
        </div>
      </Link>
      <img src={more} alt="" />
    </div>
  );
}
