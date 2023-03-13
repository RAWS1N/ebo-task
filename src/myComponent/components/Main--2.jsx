import React from "react";
import { services, mobileLinks } from "../../utility/data";
import ServiceII from "./ServiceII";
import MobileLinkII from "./MobileLinkII";
import { MdEdit } from "react-icons/md";
import { AiOutlineLeft } from "react-icons/ai";

function Main() {
  return (
    <div className="mx-auto lg:max-w-6xl h-screen">
      <div className="lg:px-4">
        <div className="flex  items-center justify-between lg:mt-8">
          <div className="flex gap-1 items-center p-2 lg:p-0 shadow-md mb-4 w-screen lg:block lg:shadow-none lg:w-auto fixed lg:static top-0  bg-white">
            <AiOutlineLeft className="h-5 w-5 lg:hidden" />
            <h1 className="text-base lg:text-3xl ">My Account</h1>
          </div>
          <h2 className="text-xl hidden lg:inline-block text-[#2136D4] mr-12 self-start">
            Need Help?
          </h2>
        </div>
        <div className="flex  items-center justify-between lg:justify-start  gap-2 mt-14 lg:mt-12  text-xl md:text-2xl px-4 lg:px-0 ">
          <h1>
            Hello, <span className="text-[#2136D4] ">Ramkrishna Pandey</span>
          </h1>
          <div className="flex items-center gap-1 self-center lg:self-end text-gray-500 mr-4">
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
      <div className="hidden h-2/4 lg:flex flex-col items-center justify-center ">
        <div className="lg:flex  items-center hidden justify-center gap-3">
          <img src="/giftbox.png" alt="giftbox" className="h-36 w-36" />
          <div className="flex items-center flex-col">
            <h1 className="text-2xl">Looking to celebrate?</h1>
            <button className="px-6 py-1 my-2 border rounded-lg bg-[#2136D4] text-white font-medium">
              Let's go
            </button>
          </div>
        </div>
      </div>
      <div className="lg:hidden ml-2 ">
        <p className="px-2 text-[#2136D4] font-bold">Need help?</p>
        <p className="px-2 mt-6 font-semibold">Useful Links</p>
        <div className="grid grid-cols-1 mb-2  mt-2 w-11/12">
          {mobileLinks.map((link, idx) => (
            <MobileLinkII key={idx} text={link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
