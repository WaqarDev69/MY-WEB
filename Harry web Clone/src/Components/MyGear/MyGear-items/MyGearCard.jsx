import React from "react";
import Btn from "../../Btn";

function MyGearCard({ title, photo, desc }) {
  return (
    <section className="lg:w-[28vw]   md:w-[50vw] h-auto relative  bg-dark-grey rounded-2xl   m-2 sm:m-6 font-poppin shadow-black shadow-2xl">
      <div>
        <img className="rounded-t-lg" src={photo} alt="Camera" />
      </div>
      <div className="text-white text-2xl px-2 py-3">
        <h1>{title}</h1>
      </div>
      <div className="text-gray-400 pb-20 px-2  ">
        <p>{desc}</p>
      </div>
      <div className="text-white w-full   flex justify-center  absolute bottom-4 ">
        <Btn btnText="View On Amazon " />
      </div>
    </section>
  );
}

export default MyGearCard;
