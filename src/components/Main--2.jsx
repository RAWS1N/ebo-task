import React from "react";
import { services, mobileLinks } from "../utility/data";
import ServiceII from "./ServiceII";
import MobileLinkII from "./MobileLinkII";
import { MdEdit } from "react-icons/md";

function Main() {
  return (
    <div className="mx-auto lg:max-w-6xl">
      <div className="">
        <h1 className=" mt-4 text-2xl  hidden lg:block text-[#2136D4] tracking-wider">Home</h1>
        <div className="flex  items-center justify-between lg:mt-8 ">
          <div className="relative hidden lg:block">
            <h1 className=" text-3xl ">My Account</h1>
            <p className="absolute border-b-2 w-28 border-gray-800 my-1 "></p>
          </div>
          <h2 className="text-xl hidden lg:block text-[#2136D4] ">
            Need Help?
          </h2>
        </div>
        <div className="flex ml-4 items-center justify-between lg:justify-start  gap-2 mt-4 lg:mt-12  text-xl md:text-2xl px-4 lg:px-0">
          <h1>
            Hello, <span className="text-[#2136D4] ">Ramkrishna Pandey</span>
          </h1>
          <div className="flex items-center gap-1 self-end text-gray-500">
            <p className="text-sm ">Edit</p>
            <MdEdit className="h-4 w-4" />
          </div>
        </div>
        <div className="lg:w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:mt-12 mb-4 ">
          {services.map((service) => (
            <ServiceII key={service.id} {...service} />
          ))}
        </div>
        <hr className="hidden lg:block" />
      </div>
      <div className="lg:flex items-center hidden justify-center mt-6 gap-3">
        <img src="/giftbox.png" alt="giftbox" className="h-36 w-36" />
        <div className="flex items-center flex-col">
          <h1 className="text-2xl">Looking to celebrate?</h1>
          <button className="px-6 py-1 my-2 border rounded-lg bg-[#2136D4] text-white font-medium">
            Let's go
          </button>
        </div>
      </div>
      <div className="lg:hidden ml-4 w-11/12">
        <p className="px-4 text-[#2136D4] font-bold">Need help?</p>
        <p className="px-4 mt-6 font-semibold">Useful Links</p>
        <div className="grid grid-cols-1 mb-2  mt-2">
          {mobileLinks.map((link, idx) => (
            <MobileLinkII key={idx} text={link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
