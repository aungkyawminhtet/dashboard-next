import React from "react";
import { FaUsers } from "react-icons/fa";

const Card = () => {
  return (
    <div className="flex rounded-xl w-[500px] py-3 px-10 hover:bg-slate-500 transition duration-300 bg-slate-400">
      <div className="flex gap-4 items-start">
        <FaUsers className="mt-1" />
        <div className="space-y-1">
          <h1>Total Users</h1>
          <h1>1000.1</h1>
          <h1><span className=" text-green-800">12%</span> more than previous month</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
