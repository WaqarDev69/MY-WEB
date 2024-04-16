import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Profile() {
  return (
    <section className="hover:scale-105 transition-all  ease-in-out">
      <div className="border border-neutral-500 rounded-xl my-6 text-white font-Poppin  w-72 sm:w-80 mx-auto ">
        <div>
          <h3 className="hidden lg:block  pl-4 py-2 text-3xl">
            <span className="text-primary">Po</span>rtfolio
          </h3>
          <div className="pt-4 lg:pt-0">
            <img
              className="h-64 w-[90%] object-cover     rounded-xl mx-auto"
              src="https://i.pinimg.com/564x/d5/bb/24/d5bb247e1c442be8dc8565336df03966.jpg"
              alt="Profile Image"
            />

            <div className="text-center pt-2">
              <h3 className="font-medium">Based in casablanca</h3>
              <p className="text-sm text-neutral-500">
                Junior Frontend Developer, UI/UX Designer
              </p>
            </div>
          </div>
          <div className="text-3xl flex  justify-center gap-3 pt-2">
            <FaFacebook className="hover:text-primary" />
            <FaInstagram className="hover:text-primary" />
            <FaLinkedin className="hover:text-primary" />
            <MdOutlineMail className="hover:text-primary" />
          </div>
          <div className="flex justify-center">
            <button className="px-16 py-1.5 my-5 rounded-xl text-white bg-primary">
              HIRE ME!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
