import React from "react";
import { AiOutlineRight } from "react-icons/ai";

function Service({ id, tag, text }) {
  return (
    <div className="flex items-center">
      {id > 1 ? <p className="border-l-2 h-16 hidden md:block"></p> : null}
      <div className="py-2 lg:px-4 lg:pl-4 border-b md:border-0 flex flex-col  w-full first:pl-0">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">{tag}</h1>
          <AiOutlineRight className="h-6 w-6" />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Service;
