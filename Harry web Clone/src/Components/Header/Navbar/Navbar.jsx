import react, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import MobileMenu from "./MobileMenu";
import LoadingBar from "react-top-loading-bar";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const navlinks = [
    { label: "Home", NavLink: "" },
    { label: "Tutorial", NavLink: "tutorial" },
    { label: "Courses", NavLink: "course" },
    { label: "Blog", NavLink: "blog" },
    { label: "Notes", NavLink: "notes" },
    { label: "Contact", NavLink: "contact" },
    { label: "My Gear", NavLink: "my-Gear" },
    { label: "Work With Us", NavLink: "Work-With-Us" },
  ];
  const reload = () => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  };
  useEffect(() => {
    reload();
  }, []);

  return (
    <div>
      <LoadingBar
        loaderSpeed="1000"
        color="rgb(151, 0, 216)"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <nav className="border-b-[1px] border-y-slate-500 h-20 w-full relative bottom-0   bg-light-grey dark:bg-white  font-poppin flex items-center justify-between">
        <div className="text-light-purple dark:text-dark-purple font-semibold text-[16px]    xl:text-2xl ">
          <h1 className="lg:pl-6">
            <NavLink onClick={() => reload()} to="">
              <span className="font-poppin ">&lt;/&gt; </span>CodeWithHarry
            </NavLink>
          </h1>
        </div>
        {/* MOBILE NAV MENU  */}
        <div
          onClick={() => reload()}
          className={`w-full lg:hidden ${
            openMenu ? "block" : "hidden"
          } absolute top-28 z-10  `}
        >
          <MobileMenu />
        </div>

        <div className="hidden lg:block xl:absolute right-60">
          <ul className="flex text-white dark:text-black gap-6 lg:text-[15px] xl:text-[17px]  ">
            {navlinks.map((d, i) => (
              <li
                key={i}
                className="hover:border-b-2 border-dark-purple  cursor-pointer "
              >
                <NavLink
                  onClick={() => reload()}
                  key={i}
                  to={d.NavLink}
                  className={({ isActive }) =>
                    `${isActive ? "border-b-2 border-dark-purple" : ""} `
                  }
                >
                  {d.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 pr-2">
          <div onClick={toggleMenu} className="lg:hidden">
            <button className="text-dark-purple flex items-center font-semibold">
              Menu
              <span className=" text-2xl">
                <IoMdArrowDropdown />
              </span>
            </button>
          </div>

          <div className="flex gap-1">
            <NavLink
              onClick={() => reload()}
              to="login"
              className={({ isActive }) =>
                `${
                  isActive ? "rounded-xl border-purple-300 border-[3px]" : ""
                } `
              }
            >
              <button className="bg-dark-purple text-xs  text-white  px-2 py-2  rounded-lg">
                Login
              </button>
            </NavLink>
            <NavLink
              onClick={() => reload()}
              to="Signup"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "  rounded-xl border-purple-300 border-[3px]    "
                    : ""
                } `
              }
            >
              <button
                className="bg-dark-purple hidden md:block
               text-xs sm:text-[16px]  text-white  px-2 py-2  rounded-lg"
              >
                Signup
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
