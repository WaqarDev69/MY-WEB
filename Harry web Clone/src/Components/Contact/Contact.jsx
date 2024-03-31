import React from "react";
import harryIcon from "../../Assets/logo-blue.png";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-dark-grey text-white font-poppin h-[90vh] w-full py-16 ">
      <div className="h-full sm:h-[70vh] w-[95vw] rounded-2xl border-[1px] border-black sm:w-[90vw] mx-auto flex justify-center items-center bg-light-grey ">
        <div>
          <div className="sm:text-3xl text-2xl font-semibold pb-6">
            <h1>Feel free to contact me!</h1>
          </div>
          <div className="flex justify-center pb-6">
            <img src={harryIcon} alt="" />
          </div>

          <ul className="flex justify-center w-full gap-5  text-4xl ">
            <li className="hover:text-dark-purple">
              <FaTwitter />
            </li>
            <li className="hover:text-dark-purple">
              <FaFacebookF />
            </li>
            <li className="hover:text-dark-purple">
              <FaInstagram />
            </li>
            <li className="hover:text-dark-purple">
              <FaGithub />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
