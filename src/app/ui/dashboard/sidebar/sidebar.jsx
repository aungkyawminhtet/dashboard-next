import React from "react";
import Link from "next/link";
import { IoMdCheckbox } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineHelp } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { FaFlag } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { SiProducthunt } from "react-icons/si";
import { HiCurrencyDollar } from "react-icons/hi2";
import { auth, signOut } from "@/app/auth";

const Sidebar = async () => {
  const {user} = await auth();
  // console.log("sidebar session is ", user.email);
  
  return (
    <div className="flex-row mt-5 px-5">
      <div className="flex items-center">
        <img
          className="w-[70px] rounded-[50%]"
          src={user.img  || "/pic.jgp"}
          alt="people picture"
        />
        <div className="ms-4">
          <h3 className="text-white">{user.username}</h3>
          <h3 className="text-white">Adminstrator</h3>
        </div>
      </div>
      <hr className="mt-3" />
      <div className="mt-3">
        <h2 className="mb-1">Pages</h2>
        <div className="ms-2">
          <ul className=" list-none">
            <li
              className="mb-3
             hover:bg-slate-600 p-3 rounded-md"
            >
              <Link href="/dashboard" className="flex items-center">
                <MdDashboard className=" text-white text-2xl me-2" />
                Dashboard
              </Link>
            </li>
            <li
              className="mb-3
             hover:bg-slate-600 p-3 rounded-md"
            >
              <Link href="/dashboard/users" className="flex items-center ">
                <MdOutlinePeopleAlt className=" text-white text-2xl me-2" />
                Users
              </Link>
            </li>
            <li
              className="mb-3
             hover:bg-slate-600 p-3 rounded-md"
            >
              <Link href="/dashboard/products" className="flex items-center ">
                <SiProducthunt className=" text-white text-2xl me-2" />
                Products
              </Link>
            </li>
            <li
              className="mb-3
             hover:bg-slate-600 p-3 rounded-md"
            >
              <Link href="/" className="flex items-center ">
                <HiCurrencyDollar className=" text-white text-2xl me-2" />
                Transactions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Analytics</h2>
        <div className="mt-2 ms-2">
          <ul className=" list-none">
            <li
              className="mb-3
             hover:bg-slate-600 p-3 rounded-md"
            >
              <Link href="/" className="flex items-center ">
                <IoMdCheckbox className=" text-white text-2xl me-2" />
                Dashboard
              </Link>
            </li>
            <li
              className="mb-3
             hover:bg-slate-600 p-3 rounded-md"
            >
              <Link href="/" className="flex items-center ">
                <FaFlag className=" text-white text-2xl me-2" />
                Reports
              </Link>
            </li>
            <li
              className="mb-3
             hover:bg-slate-600 p-3 rounded-md"
            >
              <Link href="/" className="flex items-center ">
                <RiTeamFill className=" text-white text-2xl me-2" />
                Teams
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>User</h2>
        <div className="mt-2 ms-2">
          <ul className=" list-none">
            <li
              className="mb-3
             hover:bg-slate-600 p-3 rounded-md"
            >
              <Link href="/" className="flex items-center ">
                <FaGear className=" text-white text-2xl me-2" />
                Settings
              </Link>
            </li>
            <li
              className="mb-3
             hover:bg-slate-600 p-3 rounded-md"
            >
              <Link href="/" className="flex items-center ">
                <MdOutlineHelp className=" text-white text-2xl me-2" />
                Help
              </Link>
            </li>
            <li
              className="mb-3
             hover:bg-slate-600 p-3 rounded-md"
            >
              <form action={async() => {
                "use server";
                signOut();
              }}>

               
                <button className="flex items-center ">
                  <MdOutlineHelp className=" text-white text-2xl me-2" />
                  Logout
                </button>
              </form>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
