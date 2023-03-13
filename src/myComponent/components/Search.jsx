import React from "react";
import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <div className="hidden md:flex items-center w-[518px]  relative h-[59px] border rounded-full overflow-hidden px-2 shadow-lg">
      <CiSearch className="absolute left-0 h-8 w-8 text-gray-400 m-2" />
      <input
        type="text"
        placeholder="Search for Occassions,Decor & More..."
        className="w-full h-full indent-10 outline-none border-none"
      />
      <button className="absolute right-0 bg-[#2136D4] text-white w-24 rounded-full m-1 h-[51px] font-semibold">
        Search
      </button>
    </div>
  );
}

export default Search;
