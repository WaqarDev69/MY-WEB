import React from "react";
import Btn from "../../Btn";

function TutorialCard({ photo, title, extraBtnText, btnText, message }) {
  return (
    <>
      <div className="w-[80vw] sm:w-[50vw] lg:w-1/5   h-auto rounded-xl bg-slate-800 shadow-lg shadow-black  my-8 border-[1px] border-black ">
        <div className="flex justify-center    pt-7">
          <img className="h-[15vh] rounded-[50%] " src={photo} alt={title} />
        </div>
        <div className="text-white font-poppin text-center">
          <h1 className="pt-4 text-xl font-semibold ">{title}</h1>
          <div>
            <p className="text-gray-400 pb-4 text-[15px] pt-2">{message}</p>
          </div>
          <div className="block mb-2">
            <Btn btnText={btnText} />
          </div>
          <div className="pb-10">
            {extraBtnText && <Btn btnText={extraBtnText} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default TutorialCard;
