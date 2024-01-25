import Image from "next/image";
import React from "react";

const Transcation = () => {
  return (
    <div className="w-full bg-slate-400 p-2 mt-3 rounded-xl">
      <h1 className="font-bold text-2xl">Latest Transactions</h1>
      <table className="w-full">
        <thead>
          <tr>
          <th className="text-left p-1">Name</th>
          <th className="text-left p-1">Status</th>
          <th className="text-left p-1">Date</th>
          <th className="text-left p-1">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-slate-300">
            <td className="flex text-left p-1 items-center">
              <Image
                src="/pic.jpg"
                className="rounded-[50%] me-1"
                alt=""
                width={40}
                height={40}
              />
              Davic John
            </td>
            <td className="text-left p-1">Pending</td>
            <td className="text-left p-1">10.12.2024</td>
            <td className="text-left p-1">$100.1</td>
          </tr>
          <tr className=" ">
            <td className="flex text-left p-1 items-center">
              <Image
                src="/pic.jpg"
                className="rounded-[50%] me-1"
                alt=""
                width={40}
                height={40}
              />
              Davic John
            </td>
            <td className="text-left p-1">Pending</td>
            <td className="text-left p-1">10.12.2024</td>
            <td className="text-left p-1">$100.1</td>
          </tr>
          <tr className="bg-slate-300">
            <td className="flex text-left p-1 items-center">
              <Image
                src="/pic.jpg"
                className="rounded-[50%] me-1"
                alt=""
                width={40}
                height={40}
              />
              Davic John
            </td>
            <td className="text-left p-1">Pending</td>
            <td className="text-left p-1">10.12.2024</td>
            <td className="text-left p-1">$100.1</td>
          </tr>
          <tr className=" ">
            <td className="flex text-left p-1 items-center">
              <Image
                src="/pic.jpg"
                className="rounded-[50%] me-1"
                alt=""
                width={40}
                height={40}
              />
              Davic John
            </td>
            <td className="text-left p-1">Pending</td>
            <td className="text-left p-1">10.12.2024</td>
            <td className="text-left p-1">$100.1</td>
          </tr>
          <tr className="bg-slate-300">
            <td className="flex text-left p-1 items-center">
              <Image
                src="/pic.jpg"
                className="rounded-[50%] me-1"
                alt=""
                width={40}
                height={40}
              />
              Davic John
            </td>
            <td className="text-left p-1">Pending</td>
            <td className="text-left p-1">10.12.2024</td>
            <td className="text-left p-1">$100.1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transcation;
