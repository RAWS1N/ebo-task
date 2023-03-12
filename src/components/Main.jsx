import React from "react";
import MobileLink from "./MobileLink";
import { BsArrowLeft } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { services, mobileLinks } from "../utility/data";
import Service from "./Service";

function Main() {
  return (
    <div className="md:ml-[85px]  px-4 my-4">
      <div className="flex items-center gap-2">
        <BsArrowLeft className="h-8 w-8" />
        <p className="text-xl font-semibold">Home</p>
      </div>
      <div className="my-4">
        <div className="flex items-center self-start justify-between text-2xl font-bold ">
          <p>My Account</p>
          <p className="text-[#2136D4] hidden md:block">Need help?</p>
        </div>
        <div className="flex items-center lg:justify-start justify-between gap-2 my-6 ">
          <h1 className="text-lg lg:text-3xl">
            Hello,{" "}
            <span className="text-[#2136D4] font-semibold">
              ebo now
            </span>
          </h1>
          <div className="flex items-center gap-1 text-gray-400 font-semibold  self-end ">
            <p>Edit</p>
            <MdEdit />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 px-4 -mx-4 md:mb-4">
          {services.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </div>
        <p className="text-[#2136D4] md:hidden font-bold text-xl my-2 ">
          Need help?
        </p>
        <hr className="hidden md:block" />
        <div className="md:hidden my-4">
          <p className="font-bold">Useful links</p>
          {mobileLinks.map((link, idx) => (
            <MobileLink key={idx} text={link} />
          ))}
        </div>
      </div>
      <div className="items-center justify-center mt-12 hidden md:flex">
        <img src="/giftbox.png" alt="giftbox" className="h-44 w-44" />
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold">Looking to celebrate?</p>
          <button className="border px-4 py-1 my-2 rounded-lg text-[#2136D4] font-bold text-lg border-black">
            Let's go
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
