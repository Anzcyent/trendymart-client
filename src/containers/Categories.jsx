import React from "react";
import { Category } from "../components";
import categoryConstants from "../utils/category/categoryConstants";

const Categories = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row justify-evenly mt-3 p-3">
      {categoryConstants.map((category, i) => (
        <Category
          key={"category" + i}
          name={category.name}
          image={category.image}
          color={category.color}
        />
      ))}
    </div>
  );
};

export default Categories;
