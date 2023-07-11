import React from "react";
import productConstants from "../utils/product/productConstants";
import { Product } from "../components";

const Products = () => {
  return (
    <div className="p-3 font-urbanist mt-5">
      <h1 className="font-bold text-4xl text-center">Popular Products</h1>

      <div className="flex flex-wrap justify-evenly mt-3">
        {productConstants.map((product, i) => (
          <Product key={"product" + i} image={product.image} />
        ))}
      </div>
    </div>
  );
};

export default Products;
