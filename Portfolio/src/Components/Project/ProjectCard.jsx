import React from "react";
import html from "../../Assets/HTML.png";

function ProjectCard({ img }) {
  return (
    <aside className=" cursor-pointer hover:scale-110  border-2 duration-200 rounded-md relative    h-44 w-64  md:w-56 bg-cyan-300">
      <div className="h-full w-full hover:bg-black/50 absolute"></div>
      <img className="h-full w-full object-cover " src={img} alt="" />
    </aside>
  );
}

export default ProjectCard;
