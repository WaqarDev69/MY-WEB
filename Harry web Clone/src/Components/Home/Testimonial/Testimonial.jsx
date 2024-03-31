import React from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  const data = [
    {
      desc: "I don't have words to thank this man, I'm really grateful to have this channel and website in my daily routine. If you're a mere beginner, then you can trust this guy and can put your time into his content. I can assure you that it'll be worth it.",
      author: "Mohit Kumar",
      role: "Web Developer",
    },
    {
      desc: "For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel, and one can learn according to his skill levels. And the icing on the cake is, everything is available for free.",
      author: "Rakesh Shetty",
      role: "AI Engineer",
    },
  ];
  return (
    <>
      <div className="h-auto w-full bg-dark-grey">
        <div>
          <h1 className="text-dark-purple text-5xl font-semibold text-center py-10 pt-28">
            Testimonials
          </h1>
        </div>
        <div className="lg:flex justify-center  md:py-10 ">
          {data.map((item, index) => (
            <TestimonialCard key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonial;
