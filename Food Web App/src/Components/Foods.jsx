import { data } from "../Data/Data";
import React, { useState } from "react";

function Foods() {
  const [foods, setFoods] = useState(data);
  // Filter Type
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      }),
    );
  };
  // Filter Price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      }),
    );
  };

  return (
    <div>
      <div className="text-center font-poppins text-4xl font-bold text-orange-600">
        <h1>Top Rated Menu Foods</h1>
      </div>
      <div className="mt-8 flex flex-col justify-between px-4 md:flex-row">
        {/* Filter Type  */}
        <div>
          <h3 className="px-4 text-xl font-bold">Filter Type</h3>
          <div>
            <button
              onClick={() => setFoods(data)}
              className="m-2 rounded-xl border-2 border-orange-600 px-2 py-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-2 rounded-xl border-2 border-orange-600 px-2 py-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burger
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-2 rounded-xl border-2 border-orange-600 px-2 py-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-2 rounded-xl border-2 border-orange-600 px-2 py-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-2 rounded-xl border-2 border-orange-600 px-2 py-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* Filter Price  */}
        <div>
          <h3 className="px-4 text-xl font-bold">Filter Price</h3>
          <div>
            <button
              onClick={() => filterPrice("$")}
              className="m-2 rounded-xl border-2 border-orange-600 px-2 py-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-2 rounded-xl border-2 border-orange-600 px-2 py-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-2 rounded-xl border-2 border-orange-600 px-2 py-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-2 rounded-xl border-2 border-orange-600 px-2 py-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display Foods  */}
      <div className="mx-auto grid w-[90vw] grid-cols-1 gap-4  md:grid-cols-3 lg:grid-cols-4">
        {foods.map((item, i) => (
          <div
            key={i}
            className="mb-4 mt-8 rounded-xl shadow-xl  hover:scale-105"
          >
            <img
              className="h-[200px] w-full rounded-t-xl object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="flex items-center justify-between rounded-xl bg-white px-4 py-2">
              <span className="text-xl font-bold">{item.name}</span>
              <span className="rounded-xl bg-orange-600 px-2 py-1 text-xl text-white">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foods;
