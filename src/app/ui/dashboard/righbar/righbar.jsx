import React from "react";
import Image from "next/image";
import { FaRegPlayCircle } from "react-icons/fa";
import styles from "./rightbar.module.css";

const Rightbar = () => {
  return (
    <div className={`flex flex-col space-y-8 ${styles.immg} `}>
      <div className="p-2 shadow-lg bg-slate-500 rounded-xl relative">
        <div className="flex items-center mb-2">
          <Image src={"/frame.png"} alt="" width={20} height={20} />
          <h2 className="text-2xl font-semibold ms-2">Available Now</h2>
        </div>
        <h1 className=" tracking-wide">Takes 4 minutes to learn</h1>
        <h1 className="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, nam.
        </h1>
        <div className="flex items-center justify-center py-3 bg-blue-600 hover:bg-blue-700 rounded-lg">
          <FaRegPlayCircle />
          <h2 className="ms-3 text-white">Watch</h2>
        </div>
        <Image
          className="absolute top-0 right-0 opacity-40" loading="lazy"
          src={"/rock.png"}
          alt=""
          width={120}
          height={120}
        />
      </div>
      <div className="p-2 shadow-lg bg-slate-500 rounded-xl relative">
        <div className="flex items-center mb-2">
          <Image src={"/frame.png"} alt="" width={20} height={20} />
          <h2 className="text-2xl font-semibold ms-2">Available Now</h2>
        </div>
        <h1 className=" tracking-wide">Takes 4 minutes to learn</h1>
        <h1 className="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, nam.
        </h1>
        <div className="flex items-center justify-center py-3 bg-blue-600 hover:bg-blue-700 rounded-lg">
          <FaRegPlayCircle />
          <h2 className="ms-3 text-white">Watch</h2>
        </div>
        <Image
          className="absolute top-0 right-0 opacity-40" loading="lazy"
          src={"/rock.png"}
          alt=""
          width={120}
          height={120}
        />
         
      </div>
      <div className="p-2 shadow-lg bg-slate-500 rounded-xl relative">
        <div className="flex items-center mb-2">
          <Image src={"/frame.png"} alt="" width={20} height={20} />
          <h2 className="text-2xl font-semibold ms-2">Available Now</h2>
        </div>
        <h1 className=" tracking-wide">Takes 4 minutes to learn</h1>
        <h1 className="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, nam.
        </h1>
        <div className="flex items-center justify-center py-3 bg-blue-600 hover:bg-blue-700 rounded-lg">
          <FaRegPlayCircle />
          <h2 className="ms-3 text-white">Watch</h2>
        </div>
        <Image
          className="absolute top-0 right-0 opacity-40" loading="lazy"
          src={"/rock.png"}
          alt=""
          width={120}
          height={120}
        />
        
      </div>
    </div>
  );
};

export default Rightbar;
