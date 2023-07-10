import React, { useState } from "react";
import { Announcement, Badge } from "../components";
import { FcSearch } from "react-icons/fc";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="h-[60px] flex flex-col font-urbanist">
      <Announcement />
      <nav className="px-3 py-1 flex">
        {/* Input */}
        <div className="hidden md:flex items-center w-1/3">
          <span className="mr-5">EN</span>

          <div className="flex justify-center items-center border text-sm px-2 py-1">
            <input type="text" className="outline-0" />
            <FcSearch />
          </div>
        </div>

        {/* LOGO */}
        <div className="w-2/3 md:w-1/3 flex justify-center items-center">
          <legend className="font-bold md:text-4xl text-2xl">TrendyMart</legend>
        </div>

        {/* MENU */}
        <div className="hidden md:flex w-1/3 flex justify-end items-center">
          <a href="#" className="mr-4 text-sm">
            REGISTER
          </a>
          <a href="#" className="mr-4 text-sm">
            SIGN IN
          </a>

          <a href="#" className="text-lg relative">
            <BsFillCartFill />
            <Badge>5</Badge>
          </a>
        </div>

        {/* MENU BUTTON */}
        <div className="md:hidden flex justify-center items-center w-1/3">
          <AiOutlineMenu className="text-lg" onClick={() => setToggleMenu(prev => !prev)} />
        </div>

        {/* RESPONSIVE MENU */}
        {toggleMenu && (
          <div className="absolute flex flex-col justify-evenly items-center right-10 top-20 bg-aqua text-white w-1/2 h-1/4 rounded-lg z-20">
            <a href="#" className="text-sm">
              REGISTER
            </a>
            <a href="#" className="text-sm">
              SIGN IN
            </a>

            <a href="#" className="text-lg relative">
              <BsFillCartFill />
              <Badge>5</Badge>
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
