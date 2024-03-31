import React from "react";
import NewCourse from "./NewCourse";
import pythoncourse from "../../../Assets/pythoncourse.jpg";
import JSCourse from "../../../Assets/JScourse.jpg";
import Sanity from "../../../Assets/Sanity-Thumb.jpg";
import Strapi from "../../../Assets/Strapi-Thumb.jpg";
import tailwind from "../../../Assets/tailwind.png";
import reactcourse from "../../../Assets/reactcourse.png";
import nextjs from "../../../Assets/nextjs.png";
import pythonnew from "../../../Assets/pythonnew.png";
import cpractice from "../../../Assets/cpractice.png";
import pygame from "../../../Assets/pygame.png";
import ooppython from "../../../Assets/ooppython.png";
import pyprograme from "../../../Assets/pyprograme.png";
import webdevflask from "../../../Assets/webdevflask.png";

function NewCourseData() {
  const value = [
    {
      img: JSCourse,
      title: "Ultimate JavaScript Course",
      desc: "This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy",
    },
    {
      img: Sanity,
      title: "Sanity.io Tutorials in Hindi",
      desc: "Sanity.io is the platform for structured content. This course will not only cover Sanity from starting to the end, but it has projects for hands-on experience.",
    },
    {
      img: Strapi,
      title: "Strapi Tutorial For Beginners",
      desc: "This course contains everything that you should know about Strapi. It is an open-source, Headless CMS that saves lot of time for developers by giving them freedom to use their favorite tools and frameworks.",
    },
    {
      img: pythoncourse,
      title: "Python Tutorials - 100 Days of Code",
      desc: "Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!",
    },
    {
      img: tailwind,
      title: "Tailwind Course In Hindi",
      desc: "Complete Tailwind CSS Course by CodeWithHarry in Hindi - Learn Tailwind CSS from scratch for free!",
    },
    {
      img: reactcourse,
      title: "React Js Tutorials For Beginners",
      desc: "React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up!",
    },
    {
      img: nextjs,
      title: "Next.js Tutorials For Beginners",
      desc: "Complete Next.js Course by CodeWithHarry in Hindi - Learn Next.js from Scratch.",
    },
  ];
  const moreCourses = [
    {
      img: pythonnew,
      title: "Ultimate JavaScript Course",
      desc: "This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy",
    },
    {
      img: cpractice,
      title: "Ultimate JavaScript Course",
      desc: "This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy",
    },
    {
      img: pygame,
      title: "Ultimate JavaScript Course",
      desc: "This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy",
    },
    {
      img: ooppython,
      title: "Ultimate JavaScript Course",
      desc: "This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy",
    },
    {
      img: pyprograme,
      title: "Ultimate JavaScript Course",
      desc: "This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy",
    },
    {
      img: webdevflask,
      title: "Ultimate JavaScript Course",
      desc: "This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy",
    },
  ];
  return (
    <>
      <section className="  bg-dark-grey">
        <div>
          <h1 className="pt-8 md:pt-12 md:text-4xl text-3xl text-center font-poppin font-semibold text-dark-purple">
            Recommended Courses
          </h1>
        </div>
        <div className="h-auto md:flex justify-center flex-wrap gap-6 ">
          {value.map((item, index) => (
            <NewCourse key={index} value={item} btnText="Start Watching" />
          ))}
        </div>
      </section>
      <section className="w-full  bg-dark-grey">
        <div>
          <h1 className="pt-8 md:pt-12 md:text-4xl text-3xl text-center font-poppin font-semibold text-dark-purple">
            More Courses
          </h1>
        </div>
        <div className="h-auto md:flex justify-center flex-wrap gap-6 ">
          {moreCourses.map((item, index) => (
            <NewCourse key={index} value={item} btnText="Start Watching" />
          ))}
        </div>
      </section>
    </>
  );
}

export default NewCourseData;
