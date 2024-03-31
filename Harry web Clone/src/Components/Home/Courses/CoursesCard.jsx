import React from "react";
function CoursesCard({ data, btnText }) {
  return (
    <div>
      <div className=" mx-auto mt-10 h-full relative shadow-xl shadow-black   w-[90vw] sm:w-[50vw] md:w-[30vw] bg-testimonial-bg rounded-3xl  font-poppin   ">
        <img className="rounded-t-3xl " src={data.img} alt="python course" />
        <div className="pl-6 pt-6 pr-3 ">
          <h1 className="text-gray-400 font-semibold">FREE COURSE</h1>
          <h1 className="text-white text-[18px] font-semibold">{data.title}</h1>
          <h1 className="text-gray-400 h-50 pt-3 leading-normal pb-16 ">
            {data.desc}
          </h1>
          <div className="flex   justify-center ">
            <button className="bg-dark-purple hover:bg-purple-800 absolute bottom-0  text-white w-40 py-2 mb-4 rounded-3xl    ">
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesCard;
