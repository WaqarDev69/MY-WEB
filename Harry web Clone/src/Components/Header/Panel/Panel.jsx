import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import MobileMenu from "../Navbar/MobileMenu";

function Panel() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <div className="border-b-[1px] border-black dark:border-pink-600 h-12 w-full bg-light-grey dark:bg-white flex justify-between items-center  px-9 text-light-purple">
        <div className="text-2xl">
          <NavLink to="">
            <IoMdHome />
          </NavLink>
        </div>
        <ul className="hidden  lg:flex font-poppin gap-6 font-semibold">
          <li className="hover:border-b-2 border-dark-purple cursor-pointer">
            HTML
          </li>
          <li className="hover:border-b-2 border-dark-purple cursor-pointer">
            CSS
          </li>
          <li className="hover:border-b-2 border-dark-purple cursor-pointer">
            JS
          </li>
          <li className="hover:border-b-2 border-dark-purple cursor-pointer">
            C
          </li>
          <li className="hover:border-b-2 border-dark-purple cursor-pointer">
            C++
          </li>
          <li className="hover:border-b-2 border-dark-purple cursor-pointer">
            JAVA
          </li>
          <li className="hover:border-b-2 border-dark-purple cursor-pointer">
            PYTHON
          </li>
          <li className="hover:border-b-2 border-dark-purple cursor-pointer">
            PHP
          </li>
          <li className="hover:border-b-2 border-dark-purple cursor-pointer">
            JAVA
          </li>
        </ul>
        <div className="text-xl flex">
          {showSearch && (
            <input
              className=" px-2   w-44 h-7 rounded-md bg-gray-500 border-2 outline  border-purple-800 mr-5 "
              type="text"
              placeholder="Search..."
            />
          )}
          <IoSearchSharp
            className="text-2xl cursor-pointer"
            onClick={() => {
              setShowSearch(!showSearch);
            }}
          />
        </div>
      </div>
      {/* <MobileMenu /> */}
    </div>
  );
}

export default Panel;
