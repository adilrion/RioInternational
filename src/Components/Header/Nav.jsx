import React, { useState } from "react";
import "./Header.css";
import {
  MdOutlineShoppingCart,
  MdOutlineFavoriteBorder,
  MdOutlineAddShoppingCart,
  MdOutlineSearch,
} from "react-icons/md";

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
      <div className=" bg-[#EAF4F4]">
        <div className="flex items-center justify-between h-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex justify-between">
            <a href="/" className="basis-1/6 text-gray-800">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </a>

            <div className="search-form bg-[#ffffff] flex items-center  pl-3 rounded-full overflow-hidden">
              <form action="">
              <input type="search" placeholder="search.." className=" focus:outline-none rounded-full px-2 bg-[#fefefe]" />
              </form>
              <button className="px-4 text-[20px] bg-[#457B9D] text-white h-full w-full "><MdOutlineSearch/></button>
            </div>

            <div className="basis-1/4 hidden md:block" id="desktop-menu">
              <div className="flex gap-6 justify-end items-center">
                <button className="relative">
                  <MdOutlineFavoriteBorder className="text-[30px] text-[#457B9D] "/>
                  <span className="absolute top-[0px] right-[0px] translate-x-[50%] translate-y-[-50%] text-[8px] bg-[#457B9D] text-white rounded-full w-4 h-4 inline-flex justify-center items-center">13</span>
                </button>
                <button className="relative">
                  <MdOutlineShoppingCart className="text-[30px] text-[#457B9D] "/>
                  <span className="absolute top-[0px] right-[0px] translate-x-[50%] translate-y-[-50%] text-[8px] bg-[#457B9D] text-white rounded-full w-4 h-4 inline-flex justify-center items-center">24</span>
                </button>
                <button className="bg-[#457B9D] px-8 py-1 rounded-full text-white inline-flex items-center justify-center leading-[2]">Login</button>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400  hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-gray-800 transition duration-150 ease-in-out"
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
          </div>
        </div>
      </div>

      {/* For Mobile menu */}
      <div
        className={`md:hidden ${mobileMenuVisible ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 sm:px-3">
          {navItem.map((data, index) => {
            return (
              <a
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800  focus:outline-none focus:text-gray-800 focus:bg-gray-700"
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
