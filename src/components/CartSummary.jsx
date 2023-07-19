import React from "react";

const CartSummary = ({ cart }) => {
  return (
    <div className="sm:w-1/3 w-full border px-4 py-2 rounded-md flex flex-col">
      <h5 className="font-bold my-3">ORDER SUMMARY</h5>

      <div className="flex flex-col justify-evenly items-start h-40">
        <div className="flex items-center justify-between w-full">
          <span>Estimated Shipping</span>
          <span className="font-bold">$-5.90</span>
        </div>

        <div className="flex items-center justify-between w-full">
          <span>Shipping Discount</span>
          <span className="font-bold">$-5.90</span>
        </div>

        <div className="flex items-center justify-between w-full text-2xl my-3">
          <span>Total</span>
          <span className="font-bold">${cart.total}</span>
        </div>

        <button className="text-sm border px-2 py-1 hover:bg-black hover:text-white active:scale-95 transition">
          CHECKOUT NOW
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
