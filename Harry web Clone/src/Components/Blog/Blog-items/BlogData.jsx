import React from "react";
import BlogCard from "./BlogCard";

function BlogData() {
  const blogData = [
    {
      title:
        "A Comprehensive Guide to Using Stackry for International Shopping",
      date: "November 20, 2023",
      desc: "In today's interconnected world, the desire for cutting-edge tech gadgets, unique international products, and exclusive US deals has reached an unprecedented level. However, many consumers face the challenge of obtaining products not readily available in their home country. This is where Stackry emerges as a revolutionary solution, simplifying the process of ordering from the US and having it shipped effortlessly to India.",
    },
    {
      title: "How Algorithmic Trading Systems Work",
      date: "September 29, 2023",
      desc: "In India, the popularity of online trading has helped transform the financial landscape. This has led to over 20% of all trading is now done via mobile through trading apps. In line with this, another development many traders have highlighted is the use of algorithmic trading systems to take advantage of ever-changing market opportunities. To date, algorithmic trading systems are used in up to 60% of all trading volume.",
    },
    {
      title: "Build an Email Validator with HTML, CSS, and JavaScript",
      date: "September 15, 2023",
      desc: "Learn how to create a responsive Email Validator using HTML, CSS, and JavaScript. This step-by-step guide walks you through integrating the Email Validation API to validate email addresses effectively. Perfect for beginners and experts alike!",
    },
    {
      title:
        "[Solved] python was not found; run without arguments to install from the microsoft store, or...",
      date: "August 25, 2023",
      desc: "Encountered the 'Python was not found' error on your Windows system? Our step-by-step guide walks you through the process to locate and set Python paths, ensuring smooth execution. With clear instructions, images, and videos, you'll resolve this issue in no time. Dive in to get Python up and running on your system!",
    },
    {
      title: "How to find the Python Installation Path on Windows?",
      date: "August 25, 2023",
      desc: "Discover how to locate the Python installation path on your Windows system using two effective methods: the traditional Command Prompt and the modern Terminal. Whether you're troubleshooting or setting up environment variables, this guide provides clear, step-by-step instructions with visuals to help you find the information you need. Explore now!",
    },
    {
      title: "How to Generate Random Numbers in C Language",
      date: "July 1, 2022",
      desc: "A comprehensive guide to generating random numbers in C using the rand() and srand() functions, with examples and output.",
    },
    {
      title: "How to Check if Keys Exist in JavaScript Objects",
      date: "August 24, 2023",
      desc: "Learn how to check if keys exist in JavaScript objects using two popular methods: the 'in' operator and the hasOwnProperty() method. This comprehensive guide provides syntax, examples, and insights to help you navigate object properties in JavaScript",
    },
    {
      title: "[Solved] ZeroDivisionError: division by zero",
      date: "August 24, 2023",
      desc: "Understanding and handling Zero Division Error in Python: A comprehensive guide explaining what Zero Division Error is, why it happens, and how to manage it using Python. This blog includes real code examples, visual aids, and expert insights to help both beginners and seasoned programmers. Happy Coding!",
    },
    {
      title: "How to Open the Terminal in Visual Studio Code",
      date: "August 23, 2023",
      desc: "Learn how to open the terminal in Visual Studio Code (VS Code) using various methods, such as the menu bar, keyboard shortcuts, command palette, and sidebar icon. This guide also covers customizing the terminal and working with multiple terminals within VS Code.",
    },
  ];

  return (
    <section className="w-full bg-dark-grey font-poppin">
      <div className="text-slate-200 text-4xl font-semibold pt-8  pl-20">
        <h1>Coding Articles</h1>
      </div>
      {blogData.map((item, index) => (
        <BlogCard
          key={index}
          title={item.title}
          desc={item.desc}
          date={item.date}
        />
      ))}
    </section>
  );
}

export default BlogData;
