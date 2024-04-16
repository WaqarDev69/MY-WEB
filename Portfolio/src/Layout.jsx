import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navigation/NavBar";
import Profile from "./Components/Profile";
import DeskNav from "./Components/Navigation/DeskNav";

function Layout() {
  return (
    <div className="bg-secondary ">
      <NavBar />
      <div className="lg:flex items-center justify-between lg:w-[100vw] ">
        <div className="lg:w-[30vw] pt-12 lg:pt-0 ">
          <Profile />
        </div>
        <Outlet />
        <div className="lg:w-[10vw] ">
          <DeskNav />
        </div>
      </div>
    </div>
  );
}

export default Layout;
