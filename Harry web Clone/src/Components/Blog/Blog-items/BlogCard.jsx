import React from "react";
import blueicon from "../../../Assets/logo-blue.png";
import Btn from "../../Btn";

function BlogCard({ title, desc, date }) {
  return (
    <section className="bg-dark-grey text-white font-poppin p-8 ">
      <div className="bg-testimonial-bg shadow-xl shadow-black lg:w-[60vw] w-auto  md:h-auto p-8  rounded-xl border-[1px] border-black  ">
        <div className="font-semibold sm:text-3xl ">
          <h1>{title}</h1>
        </div>
        <div className="flex items-center">
          <img className="h-8" src={blueicon} alt="Harry icon" />
          <h3 className="px-2 text-xs md:text-[16px]  py-4">Haris Ali Khan</h3>
          <p className="text-gray-400 text-xs">· {date}</p>
        </div>
        <div>
          <p className="text-gray-400 sm:leading-7 text-xs pb-4  sm:text-xl">
            {desc}
          </p>
          <Btn btnText="Read More" />
        </div>
      </div>
    </section>
  );
}

export default BlogCard;
