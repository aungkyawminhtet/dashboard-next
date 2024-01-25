import React from "react";
import { Adduser } from "@/app/lib/formHandler";

const page = () => {
  return (
    <div className="p-5 bg-slate-400 mt-3 items-center flex flex-col">
      <h1 className="text-center font-bold text-2xl">Add User</h1>
      <div className="flex flex-col w-[70%] items-center">
        <form action={Adduser}>
          <div className="flex flex-col mb-3">
            <label
              className=" tracking-wider mb-2 font-bold"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              className="p-2 w-[600px] border-none outline-none rounded-md text-lg"
              id="username"
              placeholder="username"
              name="username"
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className=" tracking-wider mb-2 font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              className="p-2 w-[600px] border-none outline-none rounded-md text-lg"
              id="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className=" tracking-wider mb-2 font-bold" htmlFor="pass">
              Password
            </label>
            <input
              type="password"
              className="p-2 w-[600px] border-none outline-none rounded-md text-lg"
              id="pass"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className=" tracking-wider mb-2 font-bold" htmlFor="Phone">
              Phone
            </label>
            <input
              type="text"
              className="p-2 w-[600px] border-none outline-none rounded-md text-lg"
              id="Phone"
              placeholder="Phone"
              name="phone"
              required
            />
          </div>
          {/* <div className="flex flex-col mb-3">
            <label className="tracking-wider mb-2 font-bold" htmlFor="img">
              Image
            </label>
            <input
              type="file"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="img"
              placeholder="image"
              name="img"
            />
          </div> */}
          <div className="mb-5 flex flex-col">
            <label htmlFor="cars" className="mb-1 tracking-wider text-lg font-bold">
              User Type
            </label>
            <select
              className="w-[600px] p-1 border-none outline-none text-lg rounded-md"
              name="userType"
              id="cars"
              required
            >
              {/* <option selected>Choose Role</option> */}
              <option value={"admin"}>Admin</option>
              <option value={"user"}>User</option>
              <option value={"manager"}>Manager</option>
              <option value={"supervisor"}>Supervisor</option>
            </select>
          </div>
          <div className="mb-5 flex flex-col">
            <label htmlFor="cass" className="mb-1 tracking-wider text-lg font-bold">
              IsActive
            </label>
            <select
              className="w-[600px] p-1 border-none outline-none text-lg rounded-md"
              name="userActive"
              id="cass"
              required
            >
              {/* <option selected>Choose userAction</option> */}
              <option value={true}>Acitve</option>
              <option value={false}>InActive</option>
            </select>
          </div>

          <div className="mb-5 flex flex-col">
            <label htmlFor="des" className="mb-1 tracking-wider text-lg">
              Description
            </label>
            <textarea
              className="w-[600px] h-[150px] p-1 border-none outline-none font-semibold text-xl rounded-md"
              id="des"
              name="desc"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-[600px] bg-blue-600 hover:bg-blue-700 py-3 text-white font-semibold rounded-lg"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
