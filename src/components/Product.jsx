import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Product = ({ image, _id }) => {
  const navigate = useNavigate();
  return (
    <div className="sm:w-80 sm:h-80 w-[150px] h-[150px] bg-black transition m-3 flex justify-center items-center relative hover:opacity-50">
      <img className="w-60" src={image} alt="product" />
      <div className="flex w-full justify-evenly absolute">
        <BsFillCartFill className="text-white sm:text-4xl text-2xl border-2 rounded-full p-1 hover:bg-white hover:text-black cursor-pointer active:scale-95" />
        <AiOutlineSearch onClick={() => navigate(`/product/${_id}`)} className="text-white sm:text-4xl text-2xl border-2 rounded-full p-1 hover:bg-white hover:text-black cursor-pointer active:scale-95" />
        <AiOutlineHeart className="text-white sm:text-4xl text-2xl border-2 rounded-full p-1 hover:bg-white hover:text-black cursor-pointer active:scale-95" />
      </div>
    </div>
  );
};

export default Product;
