import React from "react";

function Home() {
  return (
    <section className="text-white lg:w-[50vw]">
      <div>
        <h3 className="text-2xl  text-center lg:text-left">
          Let's Work <span className="text-primary">Together !</span>
        </h3>
        <h4 className="text-3xl text-center lg:text-left py-4  font-bold sm:px-8 px-4 lg:px-0">
          Hi From <span className="text-primary"> Youlakou ,</span> Framer
          Designer and Front-End Developer
        </h4>
        <p className="text-neutral-500 w-[90vw] hover:scale-105 transition-all duration-300 ease-in-out lg:w-[50vw] mx-auto p-2 rounded-lg mt-4 text-left border border-neutral-500">
          I derive immense joy from designing and coding beautiful, simple
          creations. My work is a true passion, characterized by a commitment to
          elegance and user-friendliness.
        </p>
        <div className="lg:flex    gap-2 p-4">
          <h3 className="text-7xl  text-primary">
            3+{" "}
            <span className="text-sm text-neutral-500 block">
              Years of Experiance
            </span>
          </h3>
          <h3 className="text-7xl text-primary">
            10+{" "}
            <span className="text-sm text-neutral-500 block">
              Projects Completed
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Home;
