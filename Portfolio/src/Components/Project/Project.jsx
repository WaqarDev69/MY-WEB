import React from "react";
import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <section className="text-white font-Poppin">
      <div>
        <h1 className="text-4xl font-semibold text-center py-8">
          Featured <span className="text-primary"> Projects</span>
        </h1>
        <div className="flex justify-center gap-3 md:w-[60vw] flex-wrap">
          <ProjectCard
            img={
              "https://i.pinimg.com/564x/7a/42/54/7a4254be68e7b9dddd4b1f63ad97ef85.jpg"
            }
          />
          <ProjectCard img="https://i.pinimg.com/564x/7b/41/ef/7b41ef339132726457daeedc386bcc05.jpg" />
          <ProjectCard img="https://i.pinimg.com/736x/b7/2b/63/b72b63de6c9623cda3262e270fb6ca7c.jpg" />
          <ProjectCard img="https://i.pinimg.com/564x/50/0b/c0/500bc0cb0f310f6a733ee3b9bda74105.jpg" />
          <ProjectCard img="https://i.pinimg.com/564x/42/ff/aa/42ffaac703ff37ff958c66c54213a2e7.jpg" />
          <ProjectCard img="https://i.pinimg.com/564x/39/48/44/39484457cf9ce146454a8da97f6f6648.jpg" />
        </div>
      </div>
    </section>
  );
}

export default Project;
