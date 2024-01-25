import React from "react";
import Navabr from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import '../ui/globals.css'

const layout = ({ children }) => {
  return (
    <div className="flex w-full bg-blue-900 min-h-screen">
      <div className="hidden lg:inline-block md:inline-block w-[15%] bg-blue-600 ">
        <Sidebar />
      </div>
      <div className="w-[85%] p-3">
        <Navabr />
        {children}
      </div>
    </div>
  );
};

export default layout;
