"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { IoNotifications } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import Search from "../search/Search";
 

const Navabr = () => {
  const pathname = usePathname();
  const name = pathname.split("/").pop();
  return (
    <div>
      {/* <div>{pathname.split('/').pop()}</div> */}
      <div className="flex p-4 bg-blue-500 items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">{name}</h1>
        
        <div className="flex items-center">
          <Search placeholder="Search..." />
          <div className=" ms-3 flex space-x-3 me-4">
            <IoNotifications className=" text-xl" />
            <MdMessage className="text-xl" />
            <TbWorld className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navabr;
