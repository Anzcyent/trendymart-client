import React from "react";

const Filter = () => {
  return (
    <div className="flex flex-col p-3 font-urbanist">
      <h1 className="text-2xl font-bold">Dresses</h1>
      <div className="flex flex-col sm:flex-row justify-between w-full">
        {/* FILTER */}
        <div className="flex sm:text-base text-sm sm:my-0 my-1">
          <span className="mr-3">Filter Products:</span>
          <select name="color" id="color" defaultValue="color">
            <option value="color" disabled>
              Color
            </option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
          </select>

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

        {/* SORT */}
        <div className="flex sm:text-base text-sm sm:my-0 my-1">
          <span className="mr-3">Sort Products:</span>
          <select name="sort" id="sort" defaultValue="newest">
            <option value="newest">
              Newest
            </option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
