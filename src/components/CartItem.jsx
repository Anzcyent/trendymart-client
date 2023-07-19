import React, { useState } from "react";

const CartItem = ({ product }) => {
  const [counter, setCounter] = useState(2);
  return (
    <div className="flex flex-col sm:w-2/3 w-full">
      {/* PRODUCT */}
      <div className="flex md:flex-row flex-col items-center justify-center w-full my-5">
        <div className="flex justify-center items-center lg:w-1/6 w-2/6">
          <img src={product.image} alt="product" className="w-full border" />
        </div>

        <div className="flex sm:flex-row flex-col justify-between items-center w-3/6 p-3 lg:mx-0 mx-3">
          <div className="flex flex-col lg:text-lg text-sm justify-evenly">
            <span className="font-bold sm:my-1">
              Product: <span className="font-normal">{product.title}</span>
            </span>
            <span className="font-bold sm:my-1">
              ID: <span className="font-normal">{product._id}</span>
            </span>
            <span
              className="w-5 h-5 rounded-full my-1"
              style={{ backgroundColor: product.color }}
            ></span>
            <span className="font-bold sm:my-1">
              Size: <span className="font-normal">{product.size}</span>
            </span>

            <div className="sm:hidden sm:font-normal font-bold flex items-center lg:text-2xl text-sm">
              <span> Quantity: </span>
              <span className="mx-3">
               {product.quantity}
              </span>
            </div>

            <span className="sm:hidden sm:font-normal font-bold text-aqua lg:text-2xl text-base">
              Price: ${product.price * product.quantity}
            </span>
          </div>

          <div className="max-[550px]:hidden flex flex-col lg:items-start items-center sm:justify-between sm:h-[7rem] h-auto w-full">
            <div className="sm:font-normal font-bold flex items-center lg:text-2xl text-sm">
              <span> Quantity: </span>
              <span className="mx-3">
               {product.quantity}
              </span>
            </div>

            <span className="sm:font-normal font-bold text-aqua lg:text-2xl text-base">
              ${product.price * product.quantity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
