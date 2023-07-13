import React from "react";

const CartSummary = () => {
  return (
    <div className="sm:w-1/3 w-full border px-4 py-2 rounded-md flex flex-col">
      <h5 className="font-bold my-3">ORDER SUMMARY</h5>

      <div className="flex flex-col justify-evenly items-start h-40">
        <span>Estimated Shipping $5.90</span>

        <span>Shipping Discount $-5.90</span>

        <span>Total $80</span>

        <button className="text-sm border px-2 py-1 hover:bg-black hover:text-white active:scale-95 transition">
          CHECKOUT NOW
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
