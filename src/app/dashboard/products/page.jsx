import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Footer from "@/app/ui/dashboard/footer/footer";
import { fetchProduct } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/formHandler";

import Paginate from "@/app/ui/dashboard/paginate/Paginate";

const Products = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { products, count } = await fetchProduct(q, page);

  return (
    <div className="flex flex-col p-3 bg-slate-400 mt-3">
      <div className="flex items-center justify-between">
        <Search placeholder="serach..." />
        <Link href={"/dashboard/products/add"}>
          <button className="px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
            Add new product
          </button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th className="text-left p-2">Title</th>
            <th className="text-left p-2">Description</th>
            <th className="text-left p-2">Price</th>
            <th className="text-left p-2">Size</th>
            <th className="text-left p-2">Stock</th>
            <th className="text-left p-2">Created at</th>
            <th className="text-left p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              className="items-center hover:bg-zinc-500 transition-all duration-300"
              key={product.id}
            >
              <td className="p-2 flex items-center">
                <Image
                  src={"/pic.jpg"}
                  className="rounded-[50%]"
                  width={30}
                  height={30}
                ></Image>
                <span className="ms-2">{product.title}</span>
              </td>
              <td className="p-2">{product.decs}</td>
              <td className="p-2">{product.price}</td>
              <td className="p-2">{product.size}</td>
              <td className="p-2">{product.stock}</td>
              <td className="p-2">
                {product.createdAt.toString().slice(4, 15)}
              </td>
              <td className="p-2 space-x-3 flex">
                <Link href={`/dashboard/products/${product.id}`}>
                  <button className="py-1 px-3 bg-teal-500 hover:bg-teal-600 rounded-lg">
                    View
                  </button>
                </Link>

                <form action={deleteProduct} className="block mb-1">
                  <input type="hidden" name="id" className="block" value={product.id} />
                  <button className="py-1 px-3 bg-red-500 hover:bg-red-600 rounded-lg">
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginate count={count} />
      <div className="flex flex-row-reverse mt-4">
        <Footer className="" />
      </div>
    </div>
  );
};

export default Products;
