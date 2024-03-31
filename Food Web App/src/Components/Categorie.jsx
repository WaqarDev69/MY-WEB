import React from "react";
import { categories } from "../Data/Data";

function Categorie() {
  return (
    <div className="pt-8 font-poppins">
      <h1 className="text-center text-4xl font-bold text-orange-600 ">
        Top Rated Menu Items
      </h1>
      {/* Categorie  */}
      <div className="grid grid-cols-2   gap-6 px-2 py-6 md:grid-cols-4 lg:px-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col items-center rounded-xl bg-gray-100 shadow-xl shadow-slate-300 hover:scale-105"
          >
            <h3 className="pt-4 font-bold">{item.name}</h3>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorie;
