import React from "react";
import SpecializationCard from "./SpecializationCard";
import { FaAccessibleIcon, FaCode, FaGlobe } from "react-icons/fa";

function Specialization() {
  return (
    <section className="font-Poppin text-white py-4">
      <div>
        <h1 className="text-3xl lg:text-4xl py-4 font-medium text-center">
          My <span className="text-primary">Specializations</span>
        </h1>
        <SpecializationCard
          title={"Responsive Web Design"}
          logo={<FaCode />}
          para={
            "Specializing in creating websites that adapt and work seamlessly across various devices and screen sizes"
          }
        />
        <SpecializationCard
          title={"Accessibility"}
          logo={<FaAccessibleIcon />}
          para={
            "Specializing in making websites accessible to users with disabilities by adhering to accessibility standards and guidelines such as WCAG (Web Content Accessibility Guidelines)."
          }
        />
        <SpecializationCard
          title={"Cross-Browser Compatibility"}
          logo={<FaGlobe />}
          para={
            " Ensuring that websites function consistently across different web browsers by testing and debugging compatibility issues."
          }
        />
      </div>
    </section>
  );
}

export default Specialization;
