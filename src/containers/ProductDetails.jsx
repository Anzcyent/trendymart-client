import React, { useState } from "react";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="flex sm:flex-row flex-col p-3 w-full sm:h-[50vh] h-auto font-urbanist">
      {/* IMG SECTION */}
      <div className="sm:w-1/3 w-full bg-[#e8e8ec] flex justify-center items-center">
        <img src={product.image} alt="product" className="w-1/3 object-cover" />
      </div>

      {/* DETAILS */}
      <div className="sm:w-2/3 w-full p-5">
        {/* TITLE */}
        <h1 className="sm:text-4xl text-2xl my-5">{product.title}</h1>
        {/* DESCRIPTION */}
        <p className="sm:text-lg text-base my-5">{product.description}</p>
        {/* PRICE */}
        <span className="sm:text-4xl text-2xl text-green">
          ${product.price}
        </span>
        {/* COLOR AND SIZE*/}
        <div className="flex my-5">
          <div className="flex items-center">
            <span className="sm:text-2xl text-lg mr-3">Color</span>
            {/* Burayı renk miktarı kadar map edeceksin ve dinamik background ekleyeceksin */}
            {product?.color?.map((color) => (
              <span
                key={color}
                className={`rounded-full w-5 h-5 mx-1`}
                style={{ backgroundColor: color }}
                onClick={() => setColor(color)}
              ></span>
            ))}
          </div>

          <div className="flex mx-5">
            <span className="sm:text-2xl text-lg mr-3">Size</span>
            <select
              name="size"
              id="size"
              defaultValue="size"
              className="mx-3"
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="size" disabled>
                Size
              </option>
              {product?.size?.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* COUNTER AND BUTTON */}
        <div className="flex my-5">
          <div className="flex">
            <span
              className="sm:text-4xl text-2xl mx-1 cursor-pointer hover:opacity-80 active:scale-95"
              onClick={() => handleQuantity("dec")}
            >
              -
            </span>
            <span className="sm:text-base text-sm font-bold border border-aqua px-3 rounded-md mx-1 flex justify-center items-center">
              {quantity}
            </span>
            <span
              className="sm:text-4xl text-2xl mx-1 cursor-pointer hover:opacity-80 active:scale-95"
              onClick={() => handleQuantity("inc")}
            >
              +
            </span>
          </div>

          <button
            type="button"
            className="sm:text-base text-sm flex justify-center items-center border-2 border-aqua font-semibold hover:opacity-80 hover:bg-aqua hover:text-white active:scale-95 px-3 mx-5"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
