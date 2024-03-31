import React from "react";
import CoursesCard from "./CoursesCard";
import pythoncourse from "../../../Assets/pythoncourse.jpg";
import JScourse from "../../../Assets/JScourse.jpg";
import reactcourse from "../../../Assets/reactcourse.png";

function Courses() {
  const data = [
    {
      img: pythoncourse,
      title: "Python Tutorials - 100 Days of Code",
      desc: "Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!",
    },
    {
      img: JScourse,
      title: "Ultimate JavaScript Course",
      desc: "This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy",
    },
    {
      img: reactcourse,
      title: "React JS Tutorials For Beginners",
      desc: "React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up!",
    },
  ];
  return (
    <>
      <section className="w-full bg-dark-grey">
        <div>
          <h1 className="pt-8 md:pt-12 md:text-4xl text-3xl text-center font-poppin font-semibold text-dark-purple">
            Recommended Courses
          </h1>
        </div>
        <div className="h-auto md:flex justify-center flex-wrap gap-6 ">
          {data.map((item, index) => (
            <CoursesCard key={index} data={item} btnText="Start Watching" />
          ))}
        </div>
      </section>
    </>
  );
}

export default Courses;
