import React from "react";
import SkillsCard from "./SkillsCard";
import reactIcons from "../../Assets/reactIcons.png";
import HTML from "../../Assets/HTML.png";
import Javascript from "../../Assets/Javascript.png";
import CSS from "../../Assets/CSS.png";
import TailwindCSS from "../../Assets/TailwindCSS.png";

function Skills() {
  return (
    <section className="lg:w-[70vw] font-Poppin  lg:h-screen flex flex-col justify-center ">
      <h1 className="text-4xl lg:text-5xl  text-center lg:text-left mt-3  text-white font-semibold pl-8  pb-5 mb-10   ">
        My <span className="text-primary ">Skills</span>
      </h1>
      <div className="flex flex-wrap gap-9 lg:px-10  lg:gap-10   justify-center lg:justify-normal">
        <SkillsCard icons={reactIcons} percent={"60%"} name={"React JS"} />
        <SkillsCard icons={HTML} percent={"80%"} name={"HTML"} />
        <SkillsCard icons={Javascript} percent={"80%"} name={"JavaScript"} />
        <SkillsCard icons={CSS} percent={"80%"} name={"CSS"} />
        <SkillsCard icons={TailwindCSS} percent={"80%"} name={"Tailwind CSS"} />
      </div>
    </section>
  );
}

export default Skills;
