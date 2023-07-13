import React, { useState } from "react";

const CartItem = () => {
  const [counter, setCounter] = useState(2);
  return (
    <div className="flex flex-col sm:w-2/3 w-full">
      {/* PRODUCT */}
      <div className="flex items-center w-full my-5">
        <div className="flex justify-center items-center lg:w-1/6 w-2/6">
          <img
            src="https://www.pngall.com/wp-content/uploads/4/Black-Leather-Jacket-PNG-Image.png"
            alt="product"
            className="w-full border"
          />
        </div>

        <div className="flex justify-between items-center w-3/6 p-3 lg:mx-0 mx-3">
          <div className="flex flex-col lg:text-lg text-sm justify-evenly">
            <span className="font-bold sm:my-1">
              Product: <span className="font-normal">New Jacket</span>
            </span>
            <span className="font-bold sm:my-1">
              ID: <span className="font-normal">97423252435</span>
            </span>
            <span className="bg-black w-5 h-5 rounded-full my-1"></span>
            <span className="font-bold sm:my-1">
              Size: <span className="font-normal">M</span>
            </span>
          </div>

          <div className="flex flex-col lg:items-start items-center justify-between sm:h-[7rem] h-auto">
            <div className="flex items-center">
              <button
                onClick={() => setCounter((prev) => prev - 1)}
                className="lg:text-4xl text-base font-bold mx-3 cursor-pointer hover:opacity-60 active:scale-95"
              >
                -
              </button>
              <span className="lg:text-4xl text-base font-normal mx-3">
                {counter}
              </span>
              <button
                onClick={() => setCounter((prev) => prev + 1)}
                className="lg:text-4xl text-base font-bold mx-3 cursor-pointer hover:opacity-60 active:scale-95"
              >
                +
              </button>
            </div>

            <span className="text-aqua lg:text-4xl text-base">$30</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
