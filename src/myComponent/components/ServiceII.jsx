import React from "react";
import { AiOutlineRight } from "react-icons/ai";

function ServiceII({ text, tag }) {
  return (
    <div className="lg:border-l  font-medium px-2 lg:px-4 lg:first:border-0 lg:first:px-0 first:px-2 first:pr-2 border-b  p-4  space-y-2 lg:border-b-0 w-11/12 ml-2  first:ml-2">
      <div className="flex items-center gap-2">
        <p className="font-normal text-lg">{tag}</p>
        <AiOutlineRight className="text-gray-400" />
      </div>
      <p className="text-black/50 text-xs font-medium antialiased capitalize">
        {text}
      </p>
    </div>
  );
}

export default ServiceII;
