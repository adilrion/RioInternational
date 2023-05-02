import React, { useState } from "react";
import "./Header.css";

import {
  MdOutlineShoppingCart,
  MdOutlineFavoriteBorder,
  MdOutlineAddShoppingCart,
  MdOutlineSearch,
} from "react-icons/md";
import { images } from "../../assets";
import Search from "../SearchBar/Search";

const navItem = [
  { title: "Dashboard", href: "" },
  { title: "Team", href: "" },
  { title: "Projects", href: "" },
  { title: "Calendar", href: "" },
];

export const Nav = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  function toggleMobileMenu() {
    setMobileMenuVisible(!mobileMenuVisible);
  }
  return (
    <nav className="">
      <div className=" bg-[#EAF4F4]  lg:px-8 p-2 md:px-4 ">
        <div className="flex items-center justify-between max-w-6xl mx-auto border-b md:border-none border-[#CCE3DE]">
          <div className="w-full flex justify-between items-center">
            <a href="/" className="basis-1/6 text-gray-800">
              <img className="w-16" src={images.logo} alt="Workflow" />
            </a>
            {/* search Form */}
            <div className="hidden md:block">
            <Search></Search>
            </div>

            <div className="basis-1/4 ">
              <div className="flex gap-6 justify-end items-center">
                <button className="relative">
                  <MdOutlineFavoriteBorder className="text-[25px] md:text-[30px] text-[#457B9D] " />
                  <span className="absolute top-[0px] right-[0px] translate-x-[50%] translate-y-[-50%] text-[6px] md:text-[10px] md:p-2 bg-[#457B9D] text-white rounded-full w-3 md:w-4 h-3 md:h-4  inline-flex justify-center items-center">
                    64
                  </span>
                </button>
                <button className="relative">
                  <MdOutlineShoppingCart className="text-[25px] md:text-[30px] text-[#457B9D] " />
                  <span className="absolute top-[0px] right-[0px] translate-x-[50%] translate-y-[-50%] text-[6px] md:text-[10px] md:p-2 bg-[#457B9D] text-white rounded-full w-3 md:w-4 h-3 md:h-4  inline-flex justify-center items-center">
                   24
                  </span>
                </button>
              
                <button className="bg-[#457B9D] text-[10px] px-3 md:px-4 py-1 md:py-2 rounded-full text-white">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between md:hidden pt-2">
          <button
            type="button"
            className=" inline-flex items-center justify-center  rounded text-gray-400 focus:text-[#457B9D] hover:text-[#457B9D]  transition duration-150 ease-in-out " /* hover:bg-[#457B9D] focus:outline-none focus:bg-[#457B9D] focus:text-white */

            id="main-menu"
            aria-label="Main menu"
            aria-haspopup="true"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <div className="block md:hidden">
            <Search></Search>
            </div>
        </div>
      </div>

      {/* For Mobile menu */}
      <div
        className={`md:hidden ${mobileMenuVisible ? "block bg-[#EAF4F4]" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="">
          {navItem.map((data, index) => {
            return (
              <a
                href="/"
                className="block py-1 text-[10px] p-2 font-medium text-gray-800  focus:outline-none focus:text-white  hover:text-[#457B9D]  transition duration-150 ease-in-out"
              >
                {data.title}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
