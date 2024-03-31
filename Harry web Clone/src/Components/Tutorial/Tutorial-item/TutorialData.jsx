import React from "react";
import TutorialCard from "./TutorialCard";
import PythonIcon from "../../../Assets/PythonIcon.webp";
import cIcon from "../../../Assets/cIcon.webp";
import cppIcon from "../../../Assets/cppIcon.webp";
import javaIcon from "../../../Assets/javaIcon.webp";
import htmlIcon from "../../../Assets/htmlIcon.webp";
import cssIcon from "../../../Assets/cssIcon.webp";
import jsIcon from "../../../Assets/jsIcon.webp";
import phpIcon from "../../../Assets/phpIcon.webp";
import reactIcon from "../../../Assets/reactIcon.webp";

function TutorialData() {
  const info = [
    {
      photo: PythonIcon,
      title: "Python Tutorial",
      btnText: "Start Learning!",
    },
    {
      photo: cIcon,
      title: "C Tutorial",
      btnText: "Start Learning!",
    },
    {
      photo: cppIcon,
      title: "C++ Tutorial",
      btnText: "Start Learning!",
    },
    {
      photo: javaIcon,
      title: "Java Tutorial",
      btnText: "Start Learning!",
    },
    {
      photo: htmlIcon,
      title: "HTML Tutorial",
      btnText: "Start Learning!",
    },
    {
      photo: cssIcon,
      title: "CSS Tutorial",
      btnText: "Start Learning!",
    },
    {
      photo: jsIcon,
      title: "Java Script Tutorial",
      btnText: "Start Learning!",
    },
    {
      photo: phpIcon,
      title: "Php Tutorial",
      btnText: "Start Learning!",
    },
    {
      photo: reactIcon,
      title: "React JS Tutorial",
      btnText: "Start Learning!",
    },
  ];
  return (
    <>
      <section className="bg-dark-grey">
        <div>
          <h1 className="pt-8 md:pt-12 md:text-4xl text-3xl text-center font-poppin font-semibold text-dark-purple">
            Tutorials
          </h1>
        </div>
        <div className=" h-auto flex justify-evenly flex-wrap gap-6 ">
          {info.map((item, i) => (
            <TutorialCard
              key={i}
              photo={item.photo}
              title={item.title}
              btnText={item.btnText}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default TutorialData;
