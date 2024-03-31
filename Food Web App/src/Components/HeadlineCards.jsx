import React from "react";

function HeadlineCards() {
  return (
    <div className="flex h-auto flex-wrap gap-x-8 gap-y-6 pb-14">
      <div className=" relative h-[35vh]   w-[80vw] py-6  pl-4    font-poppins md:w-[30vw]">
        <div className="absolute h-full w-full rounded-xl bg-black/40 pl-3 pt-8 text-white">
          <h3 className="text-2xl font-bold">Sun's Out Boggo's Out</h3>
          <h5 className="text-xl font-semibold">Through 8/26</h5>
          <button className="absolute bottom-4 left-4 rounded-xl bg-white px-2 py-1 text-sm text-black hover:scale-105">
            Order Now
          </button>
        </div>
        <img
          className="h-[35vh] w-full rounded-xl object-cover"
          src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      <div className=" relative h-[35vh]  w-[80vw] py-6  pl-2    font-poppins md:w-[30vw]">
        <div className="absolute h-full w-full rounded-xl bg-black/40 pl-3 pt-8 text-white">
          <h3 className="text-2xl font-bold">Yummy Desi Foods</h3>
          <h5 className="text-xl font-semibold">Through 8/26</h5>
          <button className="absolute bottom-4 left-4 rounded-xl bg-white px-2 py-1 text-sm text-black hover:scale-105">
            Order Now
          </button>
        </div>
        <img
          className="h-[35vh] w-full rounded-xl object-cover"
          src="https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      <div className=" relative h-[35vh]  w-[80vw] py-6  pl-2    font-poppins md:w-[30vw]">
        <div className="absolute h-full w-full rounded-xl bg-black/40 pl-3 pt-8 text-white">
          <h3 className="text-2xl font-bold">Found Best Desert's</h3>
          <h5 className="text-xl font-semibold">Through 24/7</h5>
          <button className="absolute bottom-4 left-4 rounded-xl bg-white px-2 py-1 text-sm text-black hover:scale-105">
            Order Now
          </button>
        </div>
        <img
          className="h-[35vh] w-full rounded-xl object-cover"
          src="https://images.pexels.com/photos/9501707/pexels-photo-9501707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
}

export default HeadlineCards;
