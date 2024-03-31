import React from "react";

function Btn({ btnText }) {
  return (
    <>
      <button className="py-2 w-44 bg-dark-purple hover:bg-purple-800 rounded-3xl ">
        {btnText}
      </button>
    </>
  );
}

export default Btn;
