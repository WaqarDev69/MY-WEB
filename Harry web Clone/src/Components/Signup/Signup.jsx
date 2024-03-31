import React, { useRef } from "react";
import logo from "../../Assets/logo-blue.png";
import loginImg from "../../Assets/login-img.jpeg";
import { NavLink } from "react-router-dom";
function Signup() {
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailRef.current.value = "";
  };
  return (
    <section className="font-poppin  text-white flex justify-center bg-dark-grey  ">
      <div className="flex">
        <div className="hidden lg:block  justify-center my-10  w-[30vw]  ">
          <img
            className="rounded-lg  h-full object-cover"
            src={loginImg}
            alt="Image of a boy"
          />
        </div>
        <div className="bg-light-grey rounded-lg h-auto  w-full sm:w-96 p-10 sm:my-10">
          <div className="text-center pt-8">
            <div className="flex justify-center">
              <img className="h-16 " src={logo} alt="Harry Logo" />
            </div>
            <h1 className="font-semibold text-2xl text-gray-200">
              CodeWithHarry.com
            </h1>
            <h3 className="text-gray-400 text-xl py-1 pb-2">Welcome back!</h3>
            <input className="py-2 border-none  outline-none " readOnly />
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
                or Signup with email
              </span>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="pt-4 pb-2">
                <label
                  className="text-gray-400 font-bold  text-sm "
                  htmlFor="email"
                >
                  Email Address
                </label>
              </div>
              <input
                ref={emailRef}
                className="w-full h-11 border-none outline-dark-purple text-black bg-gray-200 rounded-md  "
                type="email"
                required
              />

              <button
                onClick={() => console.log("clicked")}
                className="w-full bg-slate-600 text- font-semibold mt-5  rounded-md py-2 "
              >
                Create an account
              </button>
              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
                  or{" "}
                  <span>
                    <NavLink className="hover:text-dark-purple" to="/login">
                      Login
                    </NavLink>
                  </span>
                </span>
                <span className="border-b w-1/5 lg:w-1/4"></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
