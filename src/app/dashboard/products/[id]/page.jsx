import { SingleProduct } from "@/app/lib/data";
import { updateProduct } from "@/app/lib/formHandler";

import Image from "next/image"
import React from "react";
Image;

const page = async ({ params }) => {
  const id = params?.id;
  const product = await SingleProduct(id);
  console.log(product);
  return (
    <div className="flex min-h-[800px] mt-3 justify-center bg-slate-400">
      <div className="w-[70%] p-6">
        <h1 className="text-2xl font-bold text-center">Product Detail</h1>
        <form action={updateProduct} className="px-5 flex flex-col">
          <div className="flex flex-col mb-3">
            <label htmlFor="title" className="font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder={product.title}
              id="title"
              name="title"
              className="p-2 border-none outline-none text-lg rounded-lg"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="color" className="font-bold mb-2">
              Color
            </label>
            <input
              type="text"
              placeholder={product.color}
              id="color"
              name="color"
              className="p-2 border-none outline-none text-lg rounded-lg"
            />
          </div>
          <input type="hidden" name="id" value={product.id} />
          <div className="flex flex-col mb-3">
            <label htmlFor="price" className="font-bold mb-2">
              Price
            </label>
            <input
              type="text"
              placeholder={product.price}
              id="price"
              name="price"
              className="p-2 border-none outline-none text-lg rounded-lg"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="stock" className="font-bold mb-2">
              Stock
            </label>
            <input
              type="number"
              placeholder={product.stock}
              id="stock"
              name="stock"
              className="p-2 border-none outline-none text-lg rounded-lg"
            />
          </div>

          <div className="mb-5 flex flex-col">
            <label
              htmlFor="des"
              className="mb-1 tracking-wider text-lg font-bold"
            >
              Description
            </label>
            <textarea
              className="w-full h-[150px] p-1 border-none outline-none font-semibold text-xl rounded-md"
              id="des"
              name="decs"
              placeholder={product.decs}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-white font-semibold rounded-lg"
          >
            Product Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
