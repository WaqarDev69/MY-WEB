import React from "react";

import { NavLink } from "react-router-dom";

function MobileMenu() {
  const navlinks = [
    { label: "Home", NavLink: "" },
    { label: "Tutorial", NavLink: "tutorial" },
    { label: "Courses", NavLink: "course" },
    { label: "Blog", NavLink: "blog" },
    { label: "Notes", NavLink: "notes" },
    { label: "Contact", NavLink: "contact" },
    { label: "My Gear", NavLink: "my-Gear" },
    { label: "Work With Us", NavLink: "Work-With-Us" },
  ];
  return (
    <nav>
      <section className="lg:hidden   bg-light-grey text-white z-50  flex justify-center text-center ">
        <div className="w-[50vw]  leading-8 py-8  text-xl  ">
          {navlinks.map((d, i) => (
            <NavLink
              style={{ display: "block", margin: "auto", paddingTop: "10px" }}
              key={i}
              to={d.NavLink}
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-dark-purple w-fit" : ""} `
              }
            >
              {d.label}
            </NavLink>
          ))}
        </div>
      </section>
    </nav>
  );
}

export default MobileMenu;
