import React from "react";

export default function Links() {
  return (
    <div>
      <ul className="link list-none text-sm text-[gray]">
        <div className="flex justify-between gap-[10px]">
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
        <div className="flex justify-between gap-[10px]">
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
