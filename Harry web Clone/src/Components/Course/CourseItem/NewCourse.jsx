import React from "react";

function NewCourse({ value, btnText }) {
  return (
    <>
      <div className="md:pb-20 pb-4    ">
        <div className=" mx-auto mt-10 h-full shadow-xl shadow-black   w-[90vw] sm:w-[50vw] md:w-[30vw] relative bg-testimonial-bg rounded-3xl  font-poppin   ">
          <img className="rounded-t-3xl " src={value.img} alt="python course" />
          <div className="pl-6 pt-6 pr-3 ">
            <h1 className="text-gray-400 font-semibold">FREE COURSE</h1>
            <h1 className="text-white text-[18px] font-semibold">
              {value.title}
            </h1>
            <h1 className="text-gray-400 h-50 pb-20 pt-3 leading-normal ">
              {value.desc}
            </h1>
            <div className="flex   justify-center">
              <button className="bg-dark-purple hover:bg-purple-800 absolute bottom-0  text-white px-4 py-2 rounded-3xl my-6   ">
                {btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewCourse;
