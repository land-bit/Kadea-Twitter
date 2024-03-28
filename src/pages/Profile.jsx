import React from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { userName } = useParams();
  return (
    <div className="my-[40vh] mx-auto text-center text-6xl">
      <h1>Profil de @{userName}</h1>
    </div>
  );
}
