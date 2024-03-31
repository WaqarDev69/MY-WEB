import React from "react";
import logo from "../../Assets/logo-blue.png";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className=" h-auto w-full text-white bg-light-grey font-poppin flex items-center flex-wrap justify-between px-9 ">
        <div className="flex md:justify-center  items-center ">
          <img className="h-20 p-2" src={logo} alt="Logo Image" />
          <h1 className="text-2xl font-semibold pl-2 ">CodeWithHarry</h1>
        </div>
        <ul className="flex justify-center w-full sm:w-fit gap-5 py-5 pl-10 text-xl">
          <li className="hover:text-dark-purple cursor-pointer">
            <FaTwitter />
          </li>
          <li className="hover:text-dark-purple cursor-pointer">
            <FaFacebookF />
          </li>
          <li className="hover:text-dark-purple cursor-pointer">
            <FaInstagram />
          </li>
          <li className="hover:text-dark-purple cursor-pointer">
            <FaGithub />
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
