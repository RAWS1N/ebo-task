import React from "react";
import { services } from "../utility/data";
import ServiceII from "./ServiceII";

function Main() {
  return (
    <div className="mx-auto lg:max-w-6xl">
      <div>
        {/* <h1 className="mx-4 mt-4 text-xl text-[#2136D4]">Home</h1> */}
        <div className="relative hidden lg:block">
          <h1 className="mt-10 text-3xl ">My Account</h1>
          <p className="absolute border-b-2 w-28 border-gray-800 my-1 "></p>
        </div>
        <div className="lg:w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:mt-12 mb-4 ">
          {services.map((service) => (
            <ServiceII key={service.id} {...service} />
          ))}
        </div>
        <hr className="hidden lg:block" />
      </div>
    </div>
  );
}

export default Main;
