import { singleUser } from "@/app/lib/data";
import Image from "next/image";
import React from "react";
Image;
import { updateUser } from "@/app/lib/formHandler";

const page = async ({ params }) => {
  const id = params?.id;
  const user = await singleUser(id);
  // console.log(user);

  return (
    <div className="flex flex-row p-5 mt-3 gap-10">
      <div className="flex flex-col bg-slate-400 w-[20%] py-10 px-12">
        <Image src={user.img} alt="" width={200} height={200}></Image>
        <h1
          className="font-bold text-xl flex
         mt-3 self-start ms-13"
        >
          {user.username}
        </h1>
      </div>
      <div className="w-[80%] bg-slate-400 p-6">
        <h1 className="text-2xl font-bold text-center">User Detail</h1>
        <form action={updateUser} className="px-5 flex flex-col">
          <div className="flex flex-col mb-3">
            <label htmlFor="useranme" className="font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder={user.username}
              id="username"
              name="username"
              className="p-2 border-none outline-none text-lg rounded-lg"
            />
          </div>
          <input type="hidden" name="id" value={user.id} />
          <div className="flex flex-col mb-3">
            <label htmlFor="email" className="font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              placeholder={user.email}
              id="email"
              name="email"
              className="p-2 border-none outline-none text-lg rounded-lg"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="pass" className="font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder={user.password}
              id="pass"
              className="p-2 border-none outline-none text-lg rounded-lg"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="phone" className="font-bold mb-2">
              Phone
            </label>
            <input
              type="phone"
              name="phone"
              placeholder={user.phone}
              className="p-2 border-none outline-none text-lg rounded-lg"
            />
          </div>
          <div className="mb-5 flex flex-col">
            <label for="cars" className="mb-1 tracking-wider text-lg font-bold">
              User Type
            </label>
            <select
              className=" p-1 border-none outline-none text-lg rounded-md"
              id="cars"
              name="userType"
            >
              <option selected={user.isAdmin} value="admin">Admin</option>
              <option selected={user.isAdmin} value="user">User</option>
              <option selected={user.isAdmin} value="manager">Manager</option>
              <option selected={user.isAdmin} value="supervisor">Supervisor</option>
            </select>
          </div>
          <div className="mb-5 flex flex-col">
            <label for="cars" className="mb-1 tracking-wider text-lg font-bold">
              Performance
            </label>
            <select
              className="p-1 border-none outline-none text-lg rounded-md"
              id="cars"
              name="userActive"
            >
              <option value={true} selected={user.isActive}>Active</option>
              <option value={false} selected={!user.isActive}>Inactive</option>
            </select>
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
              name="desc"
              placeholder={user.desc}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-white font-semibold rounded-lg"
          >
            User Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
