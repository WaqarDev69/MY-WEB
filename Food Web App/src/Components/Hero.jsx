import React from "react";

function Hero() {
  return (
    <div className="relative">
      <img
        className="mx-auto max-h-[90vh] w-[97vw] object-cover"
        src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Burger Image for Hero Section"
      />
      <div className=" absolute left-1/4 top-1/2 ml-2  -translate-x-1/2 -translate-y-1/2 transform font-poppins  text-white lg:left-1/4 lg:pl-8 ">
        <div className="p-4 pl-8 text-xl font-semibold sm:text-2xl md:text-4xl lg:text-7xl">
          <h1>
            The <span className="text-orange-600">Best</span>
          </h1>
          <h1>
            <span className="text-orange-600">Foods</span> Delivered..!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
