import React, { useState } from "react";
import { FaUser, FaWrench } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import { PiStudentBold } from "react-icons/pi";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="z-50 bg-opacity-90 backdrop-blur-md sm:relative h-16 w-screen lg:hidden font-Poppin border-b-2 border-neutral-400 fixed top-0 text-white">
      {openMenu && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-70 "
          onClick={handleToggleMenu}
        ></div>
      )}
      <div className="flex h-full justify-between items-center px-3">
        <h1 className="text-3xl ">
          <span className="text-primary font-semibold">Po</span>rtfolio
        </h1>
        {openMenu ? (
          <IoClose
            className="transition-all duration-700 ease-in-out text-5xl cursor-pointer"
            onClick={handleToggleMenu}
          />
        ) : (
          <GiHamburgerMenu
            onClick={handleToggleMenu}
            className="text-4xl cursor-pointer"
          />
        )}
      </div>
      <nav
        className={`bg-opacity-70 backdrop-blur-sm text-white border-r-2 border-neutral-400 text-2xl h-screen pt-10 p-4 sm:p-8 w-[80vw] bg-secondary fixed top-0 transition-all duration-700 ease-in-out ${
          openMenu ? "left-0" : "-left-full"
        }`}
      >
        <NavLink
          className="flex items-center gap-2 font-medium pb-5"
          to=""
          onClick={handleToggleMenu}
        >
          <SlHome />
          Home
        </NavLink>
        <NavLink
          className="flex items-center gap-2 font-medium pb-5"
          to="About"
          onClick={handleToggleMenu}
        >
          <FaUser />
          About
        </NavLink>
        <NavLink
          className="flex items-center gap-2 font-medium pb-5"
          to="Experiance"
          onClick={handleToggleMenu}
        >
          <PiStudentBold />
          Experience
        </NavLink>
        <NavLink
          className="flex items-center gap-2 font-medium pb-5"
          to="Skills"
          onClick={handleToggleMenu}
        >
          <FaWrench />
          Skills
        </NavLink>
        <NavLink
          className="flex items-center gap-2  font-medium pb-5"
          to="Specialization"
          onClick={handleToggleMenu}
        >
          <GiSkills />
          Specialization
        </NavLink>
        <NavLink
          className="flex items-center gap-2  font-medium pb-5"
          to="Projects"
          onClick={handleToggleMenu}
        >
          <GoProject />
          Projects
        </NavLink>
        {/* Other nav links */}
      </nav>
    </header>
  );
}

export default NavBar;
