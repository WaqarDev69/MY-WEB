import React from "react";

function SpecializationCard({ title, logo, para }) {
  return (
    <section className="px-4 hover:scale-105 transition-all duration-300 ease-in-out w-[90vw] sm:w-[80vw] mx-auto lg:w-[50vw] my-4 border border-primary py-4  rounded-xl font-Poppin">
      <div className="text-[16px]  font-semibold flex items-center justify-between">
        <h1>{title}</h1>
        <div className="text-3xl text-primary">{logo}</div>
      </div>

      <p className="text-sm lg:text-[1rem]  text-neutral-500">{para}</p>
    </section>
  );
}

export default SpecializationCard;
