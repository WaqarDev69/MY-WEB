import React from "react";

function About() {
  return (
    <section className="text-white lg:w-[50vw] font-Poppin pb-6">
      <div>
        <h1 className="text-3xl text-center lg:pl-4 lg:pb-2 lg:text-left lg:text-4xl">
          About <span className="text-primary">Me</span>
        </h1>
        <h3 className="px-4 lg:text-4xl pt-4 lg:w-[40vw] text-3xl font-semibold text-cnter">
          I'm someone who finds profound joy in the art of design and{" "}
          <span className="text-primary">coding</span>
        </h3>
        <p className="p-2 hover:scale-105 transition-all duration-300 ease-in-out rounded-xl mt-6 text-sm text-neutral-500 border border-neutral-500 w-[90vw] lg:w-[50vw] mx-auto">
          With an unwavering passion for crafting beautiful and simple
          creations, I pour my heart into every project I undertake. My work is
          a reflection of my dedication to merging aesthetics with user-centered
          functionality. With each design and code, I aim to create solutions
          that not only look pleasing but also make life easier for users.
          Welcome to my world of elegant simplicity, where every line of code
          and every pixel hold the essence of my love for what I do.
        </p>
      </div>
    </section>
  );
}

export default About;
