import React from "react";
import { AiOutlineRight } from "react-icons/ai";

function MobileLink({ text }) {
  return (
    <div className="flex items-center justify-between border-b py-2 w-full  last:border-0 text-lg last:text-gray-500 font-semibold">
      <p>{text}</p>
      <AiOutlineRight className="last:text-black"/>
    </div>
  );
}

export default MobileLink;
