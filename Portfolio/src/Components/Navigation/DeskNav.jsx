import React from "react";
import { FaWrench, FaUser } from "react-icons/fa";
import { SlHome } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { PiStudentBold } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";

function DeskNav() {
  return (
    <section className="w-[10vw] h-screen hidden lg:flex justify-center items-center text-white  ">
      <div className="w-16  h-96 rounded-full flex flex-col items-center justify-center gap-y-4 text-3xl border border-neutral-500">
        <NavLink to="">
          <SlHome />
        </NavLink>
        <NavLink to="About">
          <FaUser />
        </NavLink>
        <NavLink to="Experiance">
          <PiStudentBold />
        </NavLink>
        <NavLink to="Skills">
          <FaWrench />
        </NavLink>
        <NavLink to="Specialization">
          <GiSkills />
        </NavLink>
        <NavLink to="Projects">
          <GoProject />
        </NavLink>
      </div>
    </section>
  );
}

export default DeskNav;
