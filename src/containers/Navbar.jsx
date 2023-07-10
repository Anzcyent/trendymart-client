import React from "react";
import { Announcement, Badge } from "../components";
import { FcSearch } from "react-icons/fc";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="h-[60px] flex flex-col font-urbanist">
      <Announcement />
      <nav className="p-3 flex">
        <div className="flex items-center w-1/3">
          <span className="mr-5">EN</span>

          <div className="flex justify-center items-center border text-sm px-2 py-1">
            <input type="text" className="outline-0" />
            <FcSearch />
          </div>
        </div>

        <div className="w-1/3 flex justify-center items-center">
          <legend className="font-bold text-4xl">TrendyMart</legend>
        </div>

        <div className="w-1/3 flex justify-end items-center">
          <a href="#" className="mr-2 text-sm">
            REGISTER
          </a>
          <a href="#" className="mr-2 text-sm">
            SIGN IN
          </a>

          <a href="#" className="text-lg relative">
            <BsFillCartFill />
            <Badge>5</Badge>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
