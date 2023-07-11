import React, { useState } from "react";

const ProductDetails = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div className="flex sm:flex-row flex-col p-3 w-full sm:h-[50vh] h-auto font-urbanist">
      {/* IMG SECTION */}
      <div className="sm:w-1/3 w-full bg-[#e8e8ec] flex justify-center items-center">
        <img
          src="https://www.pngall.com/wp-content/uploads/4/Black-Leather-Jacket-PNG-Image.png"
          alt="product"
          className="w-2/3 object-cover"
        />
      </div>

      {/* DETAILS */}
      <div className="sm:w-2/3 w-full p-5">
        {/* TITLE */}
        <h1 className="sm:text-4xl text-2xl my-5">Nice Jacket</h1>
        {/* DESCRIPTION */}
        <p className="sm:text-lg text-base my-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          accusamus nobis doloribus quas laudantium doloremque repudiandae
          mollitia modi magni dolorum.
        </p>
        {/* PRICE */}
        <span className="sm:text-4xl text-2xl text-green">$20</span>
        {/* COLOR AND SIZE*/}
        <div className="flex my-5">
          <div className="flex items-center">
            <span className="sm:text-2xl text-lg mr-3">Color</span>
            {/* Burayı renk miktarı kadar map edeceksin ve dinamik background ekleyeceksin */}
            <span className="rounded-full bg-red w-5 h-5 mx-1"></span>
            <span className="rounded-full bg-aqua w-5 h-5 mx-1"></span>
            <span className="rounded-full bg-black w-5 h-5 mx-1"></span>
          </div>

          <div className="flex mx-5">
            <span className="sm:text-2xl text-lg mr-3">Size</span>
            <select name="size" id="size" defaultValue="size" className="mx-3">
              <option value="size" disabled>
                Size
              </option>
              <option value="sm">SM</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="2xl">2XL</option>
            </select>
          </div>
        </div>

        {/* COUNTER AND BUTTON */}
        <div className="flex my-5">
          <div className="flex">
            <span
              className="sm:text-4xl text-2xl mx-1 cursor-pointer hover:opacity-80 active:scale-95"
              onClick={() => setCounter((prev) => prev - 1)}
            >
              -
            </span>
            <span className="sm:text-base text-sm font-bold border border-aqua px-3 rounded-md mx-1 flex justify-center items-center">
              {counter}
            </span>
            <span
              className="sm:text-4xl text-2xl mx-1 cursor-pointer hover:opacity-80 active:scale-95"
              onClick={() => setCounter((prev) => prev + 1)}
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
