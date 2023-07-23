import React, { useState } from "react";
import { Badge } from ".";
import { FcSearch } from "react-icons/fc";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { quantity } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user.currentUser);

  return (
    <div className="h-[60px] flex flex-col font-urbanist">
      <nav className="px-3 py-1 flex h-full items-center">
        {/* Input */}
        <div className="hidden md:flex items-center w-1/3">
          <span className="mr-5">EN</span>

          <div className="flex justify-center items-center border text-sm px-2 py-1">
            <input type="text" className="outline-0" />
            <FcSearch />
          </div>
        </div>

        {/* LOGO */}
        <Link
          to="/"
          className="w-2/3 md:w-1/3 flex justify-center items-center"
        >
          <legend className="font-bold md:text-4xl text-2xl">TrendyMart</legend>
        </Link>

        {/* MENU */}
        {!user ? (
          <div className="hidden md:flex w-1/3 flex justify-end items-center">
            <Link to="/register" className="mr-4 text-sm">
              REGISTER
            </Link>
            <Link to="/login" className="mr-4 text-sm">
              SIGN IN
            </Link>

            <Link to="/cart" className="text-lg relative">
              <BsFillCartFill />
              <Badge>{quantity}</Badge>
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex w-1/3 flex justify-end items-center">
            <span className="font-bold">{user.username}</span>

            <Link onClick={() => setToggleMenu(false)} to="/cart" className="text-lg relative">
              <BsFillCartFill />
              <Badge>{quantity}</Badge>
            </Link>
          </div>
        )}

        {/* MENU BUTTON */}
        <div className="md:hidden flex justify-center items-center w-1/3">
          <AiOutlineMenu
            className="text-lg"
            onClick={() => setToggleMenu((prev) => !prev)}
          />
        </div>

        {/* RESPONSIVE MENU */}
        {toggleMenu && !user ? (
          <div className="absolute flex flex-col justify-evenly items-center right-10 top-20 bg-aqua text-white w-1/2 h-1/4 rounded-lg z-20">
            <Link to="/register" className="text-sm">
              REGISTER
            </Link>
            <Link to="/login" className="text-sm">
              SIGN IN
            </Link>

            <Link onClick={() => setToggleMenu(false)} to="/cart" className="text-lg relative">
              <BsFillCartFill />
              <Badge>{quantity}</Badge>
            </Link>
          </div>
        ) : toggleMenu && user? (
          <div className="absolute flex flex-col justify-evenly items-center right-10 top-20 bg-aqua text-white w-1/2 h-1/4 rounded-lg z-20">
            <span>{user.username}</span>

            <Link onClick={() => setToggleMenu(false)} to="/cart" className="text-lg relative">
              <BsFillCartFill />
              <Badge>{quantity}</Badge>
            </Link>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
