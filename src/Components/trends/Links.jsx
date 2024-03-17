import React from "react";

export default function Links() {
  return (
    <div>
      <ul className="links" style={{ listStyle: "none", fontSize: "14px" }}>
        <div style={{ display: "flex", gap: "15px" }}>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Cookie Policy</a>
          </li>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <li>
            <a href="#">Accessibility</a>
          </li>
          <li>
            <a href="#">Ads info</a>
          </li>
          <li>
            <a href="#">More...</a>
          </li>
          <li>
            <a href="#">© 2024 X Corp</a>
          </li>
        </div>
      </ul>
    </div>
  );
}
