import React from "react";

import { CartItem, CartSummary } from "../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartSection = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <div className="font-urbanist p-3 w-full">
      <h1 className="text-center sm:text-2xl text-lg font-bold">YOUR CART</h1>
      <div className="flex justify-between w-full">
        <button
          type="button"
          className="font-bold sm:text-base text-xs border-2 sm:px-3 px-1 sm:py-1 hover:bg-black hover:text-white active:scale-95 transition"
          onClick={() => navigate("/")}
        >
          CONTINUE SHOPPING
        </button>
        <div className="flex items-center">
          <a href="#" className="mx-5 sm:text-base text-xs underline">
            Shopping Bag(2)
          </a>
          <a href="#" className="mx-5 sm:text-base text-xs underline">
            Your Wishlist(0)
          </a>
        </div>
        <button
          type="button"
          className="font-bold text-white sm:text-base text-xs border bg-black sm:px-3 px-1 sm:py-1 hover:bg-white hover:text-black active:scale-95 transition"
        >
          CHECKOUT NOW
        </button>
      </div>

      <div className="flex sm:flex-row flex-col justify-around items-center">
        {/* PRODUCTS */}
        <div className="flex flex-col sm:w-2/3 w-full">
          {cart.products.map((product) => (
            <CartItem key={product._id} product={product} />
          ))}
        </div>

        {/* SUMMARY */}
        <CartSummary cart={cart} />
      </div>
    </div>
  );
};

export default CartSection;
