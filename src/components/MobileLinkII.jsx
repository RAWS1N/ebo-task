import React from "react";
import { AiOutlineRight } from "react-icons/ai";

function MobileLinkII({ text }) {
  return (
    <div className="border-b p-2 last:border-b-0  space-y-2">
      <div className="flex items-center gap-2 ">
        <p className="font-normal">{text}</p>
        <AiOutlineRight className="text-gray-400" />
      </div>
    </div>
  );
}

export default MobileLinkII;
