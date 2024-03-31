import React, { useRef } from "react";
import Btn from "../Btn";

function WorkWithUs() {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const resumeLinkRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fullNameRef.current.value = "";
    emailRef.current.value = "";
    phoneNumberRef.current.value = "";
    resumeLinkRef.current.value = "";
  };

  return (
    <section className="bg-dark-grey h-auto w-full pb-14 font-poppin text-white md:flex justify-center items-center pt-20">
      <div className="md:w-[50vw] mx-auto sm:pr-16 md:pl-6 sm:pl-14 p-4 pb-14 text-center md:text-left">
        <h1 className="text-4xl font-medium ">We are hiring!</h1>
        <p className="text-gray-400 md:text-xl pt-6 w-full leading-relaxed">
          We are looking for freelance Developers, Subtitle writers, Content
          writers, and Video editors. If you think you are fit for the role.
          Submit the form. Make sure you have a valid email so we can contact
          you back in case your application gets selected. Cheers!
        </p>
      </div>
      <div className="h-auto w-[95vw] sm:w-96 mx-auto rounded-lg shadow-lg shadow-black bg-light-grey p-8">
        <div>
          <h3 className="text-gray-400">India only</h3>
          <h1 className="text-xl">Apply Now!</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-black">
            <label
              className="block text-gray-400 text-[14px] pt-6 pb-1"
              htmlFor=""
            >
              Full Name
            </label>
            <input
              ref={fullNameRef}
              className="h-9 w-[90%] rounded outline-purple-600"
              type="text"
              required
            />

            <label
              className="block text-gray-400 text-[14px] pt-6 pb-1"
              htmlFor=""
            >
              Email
            </label>
            <input
              ref={emailRef}
              className="h-9 w-[90%] rounded outline-purple-600"
              type="email"
              required
            />

            <label
              className="block text-gray-400 text-[14px] pt-6 pb-1"
              htmlFor=""
            >
              Phone Number
            </label>
            <input
              ref={phoneNumberRef}
              className="h-9 w-[90%] rounded outline-purple-600"
              type="tel"
              required
            />

            <label
              className="block text-gray-400 text-[14px] pt-6 pb-1"
              htmlFor=""
            >
              Link to your Resume
            </label>
            <input
              ref={resumeLinkRef}
              className="h-9 w-[90%] rounded outline-purple-600"
              type="text"
              required
            />
          </div>

          <div className="text-gray-400 ">
            <h3 className="py-2 pt-4">Skill :</h3>
            <div className="w-full flex text-gray-400   ">
              <div className=" w-1/2 flex-col">
                <div>
                  <input
                    className="mr-1"
                    type="radio"
                    required
                    name="skill"
                    id="sub"
                  />
                  <label className="text-xs sm:text-[1rem]" htmlFor="sub">
                    Subtitile Writer
                  </label>
                </div>
                <div>
                  <input
                    className="mr-1 "
                    type="radio"
                    name="skill"
                    id="cont"
                  />
                  <label className="text-xs  sm:text-[1rem]" htmlFor="cont">
                    Content Writer
                  </label>
                </div>
                <div>
                  <input className="mr-1" type="radio" name="skill" id="vid" />
                  <label className="text-xs sm:text-[1rem] pr-5" htmlFor="vid">
                    Vedio Editor
                  </label>
                </div>
                <div>
                  <input className="mr-1" type="radio" name="skill" id="mern" />
                  <label className="text-xs sm:text-[1rem]" htmlFor="mern">
                    MERN Dev
                  </label>
                </div>
              </div>
              <div className=" w-1/2">
                <div>
                  <input className="mr-1" type="radio" name="skill" id="py" />
                  <label className="text-xs sm:text-[1rem] pr-5" htmlFor="py">
                    Python Dev
                  </label>
                </div>
                <div>
                  <input className="mr-1" type="radio" name="skill" id="php" />
                  <label className="text-xs sm:text-[1rem]" htmlFor="php">
                    PHP Dev
                  </label>
                </div>
                <div>
                  <input className="mr-1" type="radio" name="skill" id="js" />
                  <label className="text-xs sm:text-[1rem]" htmlFor="js">
                    JavaScript Dev
                  </label>
                </div>
                <div>
                  <input className="mr-1" type="radio" name="skill" id="java" />
                  <label className="text-xs sm:text-[1rem]" htmlFor="java">
                    Java Dev
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Btn btnText="Submit" />
          </div>
        </form>
        <p className="text-xs pt-2 text-gray-400">We Will be in touch Soon!</p>
      </div>
    </section>
  );
}

export default WorkWithUs;
