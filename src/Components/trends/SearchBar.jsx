import React from "react";
import search from "/Icons/Group.svg";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-[6%] bg-[#202327] px-[2vw] w-[90%] rounded-[30px] m-[2vh]">
      <img src={search} alt="" />
      <input
        className="bg-transparent border-none h-[3.5vw] text-[15px] text-[gray] outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
