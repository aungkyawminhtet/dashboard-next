"use client";
import React from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Paginate = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  // console.log("count number is " + count);

  const page = searchParams.get("page") || 1;
  const param = new URLSearchParams(searchParams);
  const PAGE_ITEM = 2;

  const hasPrev = PAGE_ITEM * (parseInt(page) - 1) > 0;
  const hasNext = PAGE_ITEM * (parseInt(page) - 1) + PAGE_ITEM < count;

  const handleChange = (item) => {
    // console.log("prev click");
    item === "prev"
      ? param.set("page", parseInt(page) - 1)
      : param.set("page", parseInt(page) + 1);
    replace(`${pathName}?${param}`);
  };

  return (
    <div className="flex flex-row justify-between mt-5 ">
      <button
        disabled={!hasPrev}
        className="px-5 text-white py-2 bg-zinc-500 hover:bg-zinc-600 rounded-lg"
        onClick={() => handleChange("prev")}
      >
        Prev
      </button>
      <button
        disabled={!hasNext}
        className="px-5 text-white py-2 bg-zinc-500 hover:bg-zinc-600 rounded-lg"
        onClick={() => handleChange("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Paginate;