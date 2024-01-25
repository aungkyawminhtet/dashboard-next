"use client";
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Search = ({placeholder}) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const {replace} = useRouter();
  console.log(pathName);   

  const handleChange = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);
    
    if(e.target.value){
      e.target.value.length > 2 && params.set("q", e.target.value);
    }else{
      params.delete("q");
    }
    replace(`${pathName}?${params}`);
  }, 300);
  
  return (
    <div className='inline-flex items-center py-2 px-4 bg-zinc-500 rounded-md'>
        <FaSearch />
      <input className='ms-3 font-mono text-lg border-none outline-none rounded-sm' type="text" onChange={handleChange} placeholder={placeholder} />
    </div>
  )
}

export default Search
