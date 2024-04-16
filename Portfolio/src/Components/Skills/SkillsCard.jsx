import React from "react";

function SkillsCard({ icons, percent, name }) {
  return (
    <section className="hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="w-28 h-40  rounded-[70px] border border-neutral-500 font-Poppin  ">
        <img className="mx-auto h-28 pt-8" src={icons} alt="React Icon" />
        <p className="text-primary text-center pt-2 text-2xl">{percent}</p>
      </div>
      <h5 className="text-white text-center font-medium py-3 text-2xl">
        {name}
      </h5>
    </section>
  );
}

export default SkillsCard;
