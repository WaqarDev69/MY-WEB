import React from "react";

function Experiance() {
  return (
    <section className="font-Poppin text-white lg:w-[60vw]">
      <div>
        <h1 className="text-2xl lg:text-4xl text-center font-semibold">
          Education &<span className="text-primary"> Experiance</span>
        </h1>
        <div className="md:grid grid-cols-4 pl-6 gap-x-10 py-8 lg:grid-cols-none">
          <div>
            <h5 className="text-primary  ">2024 - Present</h5>
            <h3 className="font-medium pl-2">Fronend Web Developer</h3>
            <p className="text-neutral-500 pb-4 pl-2">Freelance</p>
          </div>
          <div>
            <h5 className="text-primary">2023-2025</h5>
            <h3 className="font-medium pl-2">Diploma in Software Technology</h3>
            <p className="text-neutral-500 pb-4 pl-2">G.P.I Landhi,Karachi</p>
          </div>
          <div>
            <h5 className="text-primary">2022-2024</h5>
            <h3 className="font-medium pl-2">Intermediate from Sind Board</h3>
            <p className="text-neutral-500 pl-2 pb-4">
              Govt. Degree Boys College 36/B Landhi
            </p>
          </div>
          <div>
            <h5 className="text-primary">2010-2022</h5>
            <h3 className="font-medium pl-2">High School Education</h3>
            <p className="text-neutral-500 pb-4 pl-2">
              Nasir English Secondary School , Karachi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiance;
