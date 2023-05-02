import React from 'react'
import { MdOutlineSearch } from 'react-icons/md'

const Search = () => {
  return (
     <div className="h-7 md:h-8 basis-2/4 bg-[#ffffff] flex items-center  md:pl-3 rounded-full overflow-hidden">
              <form action="" className="w-full">
              <input type="search" placeholder="Search.." className=" focus:outline-none rounded-full px-2 bg-[#fefefe] w-full" />
              </form>
              <button className="px-4 text-[20px] bg-[#457B9D] text-white h-full w-fitt "><MdOutlineSearch/></button>
            </div>
  )
}

export default Search