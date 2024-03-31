import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import laptop from "../../../Assets/laptopimage.jpg";
import { NavLink } from "react-router-dom";
function Hero() {
  const [text] = useTypewriter({
    words: [
      "Web Development",
      "AI",
      "Machine Learning",
      "Data Science",
      "C Programming",
      "DSA",
      "Python",
      "C++",
      "Java",
    ],
    loop: {},
    typeSpeed: 120,
  });

  return (
    <>
      <section className="w-full bg-dark-grey h-auto lg:flex font-poppin">
        <div className="lg:w-[50vw] text-white text-center lg:pt-16 lg:pl-16 pt-8 px-6 lg:text-left">
          <h1 className="text-3xl xl:text-4xl font-semibold pl-4 ">
            Welcome To
            <span className="block  sm:inline-block lg:block xl:inline-block  text-dark-purple text-3xl xl:text-4xl">
              CodeWithHarry
            </span>
            <div className="block">
              <span className="text-2xl   ">learn</span>
              <span className="text-dark-purple text-2xl xl:text-3xl">
                {" "}
                {text}
              </span>
              <span className="text-4xl font-light">
                <Cursor cursorStyle="|" />
              </span>
            </div>
          </h1>
          <p className="text-gray-400  text-[16px] sm:text-xl lg:text-sm  pt-3 leading-tight   px-4">
            Confused on which course to take? I have got you covered. Browse
            courses and find out the best course for you. Its free! Code With
            Harry is my attempt to teach basics and those coding techniques to
            people in short time which took me ages to learn.
          </p>
          <div className="pt-5 xl:pt-10 pl-6 ">
            <NavLink to="course">
              <button className="bg-gray-300 text-gray-950 text-xs font-semibold py-2 xl:py-3 px-4 rounded xl:text-[16px]">
                Free Courses
              </button>
            </NavLink>
            <NavLink to="blog">
              <button className="bg-gray-300 text-gray-950 text-xs font-semibold py-2 xl:py-3 px-4 ml-4 rounded xl:text-[16px]">
                Explore Blog
              </button>
            </NavLink>
          </div>
        </div>
        <div>
          <img
            className="h-[65vh] bg-inherit w-[50vw] opacity-60  hidden lg:block"
            src={laptop}
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
