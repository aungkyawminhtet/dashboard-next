import React from "react";
import Footer from "@/app/ui/dashboard/footer/footer";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import { fetchUser } from "@/app/lib/data";
import Paginate from "@/app/ui/dashboard/paginate/Paginate";
import { deleteUser } from "@/app/lib/formHandler";

const User = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {users, count} = await fetchUser(q, page);
 
  return (
    <div className="flex flex-col p-4 bg-slate-400 mt-3">
      <div className="flex items-center justify-between">
        <Search placeholder="Search.." />
        <Link href="/dashboard/users/add">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            Add new
          </button>
        </Link>
      </div>
      <div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Email</th>
              <th className="text-left p-2">Created at</th>
              <th className="text-left p-2">Role</th>
              <th className="text-left p-2">Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="hover:bg-zinc-500 transition-all duration-300" key={user.id}>
                <td className="flex items-center p-2">
                  <Image
                    src={user.img || "/pic.jpg"}
                    alt=""
                    className="rounded-[50%]"
                    width={30}
                    height={30}
                  />
                  <span className="ms-2">{user.username}</span>
                </td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.createdAt.toString().slice(4,16)}</td>
                <td className="p-2">{user.isAdmin}</td>
                <td className="p-2">{user.phone}</td>
                <td className="p-2 flex">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded-lg me-3">
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-lg">
                    Delete
                  </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Paginate count={count} />
      <div className="flex flex-row-reverse mt-3">
        <Footer className="" />
      </div>
    </div>
  );
};

export default User;
