import React from "react";
import { Category } from "../components";

const Categories = () => {
  return (
    <div className="flex w-full flex-col sm:flex-row justify-evenly mt-3 p-3">
      <Category
        name="Shirt Style"
        image="/assets/categories/shirt-style.jpg"
        color="#f3f3f3"
      />
      <Category
        name="Loungewear Love"
        image="/assets/categories/loungewear.jpg"
        color="#f1f2ef"
      />
      <Category
        name="Light Jackets"
        image="/assets/categories/light-jackets.jpg"
        color="#fff"
      />
    </div>
  );
};

export default Categories;
