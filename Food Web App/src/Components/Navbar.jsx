import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoSearchSharp, IoWalletOutline } from "react-icons/io5";
import { FaShoppingCart, FaHandsHelping } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdPricetag } from "react-icons/io";
import { BsArrowDownSquareFill } from "react-icons/bs";
import { LiaUserFriendsSolid } from "react-icons/lia";
function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <nav className="flex h-16 items-center  font-sans ">
      {/* left side */}
      <div className=" flex cursor-pointer items-center lg:px-2 ">
        <AiOutlineMenu
          onClick={() => setNav(!nav)}
          size={25}
          className="mx-1 "
        />
        <h1 className="text-xl lg:text-2xl  ">
          Best <span className="font-bold">Eats</span>
        </h1>
      </div>
      <div className="ml-3 flex items-center  rounded-3xl bg-gray-200 text-[12px]  ">
        <p className=" rounded-3xl bg-black px-1 py-1  font-semibold text-white lg:px-3  lg:py-2">
          Delivery
        </p>
        <p className="px-1 font-semibold lg:px-2">Pickup</p>
      </div>
      {/* Search box */}
      <div className="absolute    right-60 hidden w-[35vw]  items-center rounded-full bg-gray-200 py-1.5 lg:flex">
        <IoSearchSharp size={25} className="  mx-2   text-gray-500 " />
        <input
          className="w-full bg-transparent  pr-4 focus:outline-none "
          type="text"
          placeholder="Search Foods..."
        />
      </div>
      {/* Right Side  */}
      <div className="absolute right-4 flex cursor-pointer items-center rounded-full bg-black px-2 py-1 text-white lg:px-3  lg:py-2">
        <FaShoppingCart size={15} />
        <p className="ml-2 text-sm ">Cart</p>
      </div>
      {/* Mobile menu  */}
      {nav ? (
        <div className="absolute left-0 top-0 z-50 h-screen w-full bg-black/80">
          <div className="h-screen w-[60vw] bg-white lg:w-[20vw]">
            <div className="flex items-center justify-between p-2 md:p-4 ">
              <h3 className=" text-xl">
                Best <span className="font-bold">Eats</span>
              </h3>
              <div onClick={() => setNav(!nav)} className="p-2">
                <AiOutlineClose size={25} className="cursor-pointer" />
              </div>
            </div>
            <ul className="p-2  md:p-4">
              <li className="flex cursor-pointer items-center pb-3 text-xl font-semibold">
                <TbTruckDelivery className="mr-2" />
                Orders
              </li>
              <li className="flex cursor-pointer items-center pb-3 text-xl font-semibold">
                <MdOutlineFavorite className="mr-2" />
                Favorites
              </li>
              <li className="flex cursor-pointer items-center pb-3 text-xl font-semibold">
                <IoWalletOutline className="mr-2" /> Wallet
              </li>
              <li className="flex cursor-pointer items-center pb-3 text-xl font-semibold">
                <FaHandsHelping className="mr-2" /> Help
              </li>
              <li className="flex cursor-pointer items-center pb-3 text-xl font-semibold">
                <IoMdPricetag className="mr-2" /> Promotions
              </li>
              <li className="flex cursor-pointer items-center pb-3 text-xl font-semibold">
                <BsArrowDownSquareFill className="mr-2" /> Best Ones
              </li>
              <li className="flex cursor-pointer items-center pb-3 text-xl font-semibold">
                <LiaUserFriendsSolid className="mr-2" /> Invite Friends
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Navbar;
