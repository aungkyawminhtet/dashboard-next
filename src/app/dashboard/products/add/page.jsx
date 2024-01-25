import React from "react";
import {Addproduct} from "@/app/lib/formHandler";

const page = () => {
  return (
    <div className=" bg-slate-400 mt-3 h-[850px] items-center p-3 flex flex-col">
        <h1 className="text-center font-bold text-3xl mb-4">
          Add New Products
        </h1>
      <div className="w-[70%] flex">
        <form action={Addproduct} className="flex flex-wrap items-center justify-around px-5">
          <div className="mb-5 flex flex-col">
            <label htmlFor="title" className="mb-1 tracking-wider text-lg">
              Title
            </label>
            <input
              type="text"
              className="w-[600px] p-1 border-none outline-none font-semibold text-xl rounded-md"
              placeholder="title"
              id="title"
              name="title"
            />
          </div>

          <div className="mb-5 flex flex-col">
            <label htmlFor="price" className="mb-1 tracking-wider text-lg">
              Price
            </label>
            <input
              type="text"
              className="w-[600px] p-1 border-none outline-none font-semibold text-xl rounded-md"
              placeholder="price"
              id="price"
              name="price"
            />
          </div>
          <div className="mb-5 flex flex-col">
            <label htmlFor="stock" className="mb-1 tracking-wider text-lg">
              Stock
            </label>
            <input
              type="text"
              className="w-[600px] p-1 border-none outline-none font-semibold text-xl rounded-md"
              placeholder="stock"
              id="stock"
              name="stock"
            />
          </div>
          <div className="mb-5 flex flex-col">
            <label htmlFor="color" className="mb-1 tracking-wider text-lg">
              Color
            </label>
            <input
              type="text"
              className="w-[600px] p-1 border-none outline-none font-semibold text-xl rounded-md"
              placeholder="color"
              id="color"
              name="color"
            />
          </div>
          <div className="mb-5 flex flex-col">
            <label htmlFor="size" className="mb-1 tracking-wider text-lg">
              Size
            </label>
            <input
              type="text"
              className="w-[600px] p-1 border-none outline-none font-semibold text-xl rounded-md"
              placeholder="size"
              id="size"
              name="size"
            />
          </div>
          <div className="mb-5 flex flex-col">
            <label htmlFor="des" className="mb-1 tracking-wider text-lg">
              Description
            </label>
            <textarea
              className="w-[600px] h-[150px] p-1 border-none outline-none font-semibold text-xl rounded-md"
              id="des"
              name="decs"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-[600px]  bg-blue-600 hover:bg-blue-700 py-3 text-white font-semibold rounded-lg"
          >
            Add Products
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
