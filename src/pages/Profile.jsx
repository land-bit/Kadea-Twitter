import React from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { userName } = useParams();
  return (
    <div style={{ margin: "40vh auto", textAlign: "center" }}>
      <h1>Profil de @{userName}</h1>
    </div>
  );
}
