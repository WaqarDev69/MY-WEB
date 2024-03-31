import React from "react";
import { FaQuoteRight } from "react-icons/fa";

function TestimonialCard({ data }) {
  return (
    <section className="flex justify-center">
      <div className="mx-4 lg:w-[45vw] shadow-xl shadow-black md:w-[70vw] pb-20  h-auto mb-10 rounded-md bg-testimonial-bg text-slate-300 p-7 pt-10 font-poppin">
        <h1 className="font-bold">
          <FaQuoteRight />
        </h1>

        <p className="pt-3">{data.desc}</p>
        <h2 className="text-white font-semibold pt-5 pl-5">{data.author}</h2>
        <h2 className="pl-5">{data.role}</h2>
      </div>
    </section>
  );
}

export default TestimonialCard;
