import React from "react";
import Search from "./Search";
import { GoLocation } from "react-icons/go";
import { BsChevronDown } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

function Navbar() {
  return (
    <div className="flex items-center h-[109px] justify-center lg:border-b lg:border-black shadow-sm">
      <img src="/logo.svg" alt="logo" className="h-24 w-24 md:h-32 md:w-32" />
      <div className="flex items-center justify-center mt-2 gap-2 ">
        <p className="border-l-2 h-14"></p>
        <GoLocation className="h-8 w-8 lg:w-8 lg:h-8" />
        <div className="">
          <h2 className="text-sm lg:text-xl font-bold">Siliguri</h2>
          <div className="flex items-center">
            <p className="underline decoration-dotted underline-offset-4 text-sm inline">
              <span className="font-bold ">Home- </span>Ashrampara,734...
            </p>
            <BsChevronDown className="h-6 w-6" />
          </div>
        </div>
      </div>
      <Search />
      <div className="flex items-center font-semibold ml-4 ">
        <div className="navLink">
          {/* <img src="user.png" alt="" className="" /> */}
          <BiUser className="navIcon" />
          <p className="text-lg">Profile</p>
        </div>
        <div className="navLink">
          {/* <img src="heart.png" alt="" /> */}
          <AiOutlineHeart className="navIcon" />
          <p className="text-lg">Wishlist</p>
        </div>
        <div className="navLink hidden md:block">
          {/* <img src="/cart--2.jpg" alt="" className="h-12 w-12" /> */}
          <IoCartOutline className="navIcon" />
          <p className="text-lg">Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
