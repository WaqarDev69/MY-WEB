import React from "react";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaRegCopyright } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";

function Footer() {
  return (
    <div className="h-auto w-screen bg-slate-200 font-poppins shadow-inner ">
      <h1 className=" flex items-center justify-center gap-2 py-5  text-5xl font-medium">
        <IoFastFood />
        BEST <span className="font-bold"> EATS</span>
      </h1>
      <div className="mx-auto flex w-[80vw] justify-around text-xl md:w-[50vw] md:text-3xl ">
        <FaFacebook className="text-blue-500" />
        <FaInstagramSquare className="text-pink-600" />
        <FaYoutube className="text-red-600" />
        <FaLocationDot className="text-green-600" />
        <MdEmail className="text-orange-600-600" />
      </div>
      <p className="flex items-center justify-center gap-1 py-6 text-xs font-semibold text-gray-500 md:text-sm">
        <FaRegCopyright />
        Copyright reserved by BEST EATS
      </p>
    </div>
  );
}

export default Footer;
